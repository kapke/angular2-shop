import {Observable} from "rxjs";
import * as _ from 'lodash';

import {ProductRepository} from "./ProductRepository";
import {Product} from "./Product";
import {SortingDescriptor} from "../SortingDescriptor";
import {ProductFilterPipe} from "./ProductFilterPipe";
import {ProductSortPipe} from "./ProductSortPipe";


export abstract class AbstractProductRepository implements ProductRepository {
    public abstract findPromotedProducts(filterText: string, sortingDescriptor: SortingDescriptor): Observable<Product[]>;
    public abstract findAdvertisedProducts(filterText: string, sortingDescriptor: SortingDescriptor): Observable<Product[]>;
    public abstract findProducts(filterText: string, sortingDescriptor: SortingDescriptor): Observable<Product[]> ;

    protected abstract getRawProducts (): Observable<Product[]>;
    protected abstract getRawPromotedProducts (): Observable<Product[]>;

    constructor (
        protected productFilterPipe: ProductFilterPipe,
        protected productSortPipe: ProductSortPipe
    ) {}

    public findProductById(id: string): Observable<Product> {
        return Observable.merge(this.getRawProducts(), this.getRawPromotedProducts())
            .reduce((acc, products) => acc.concat(products), [])
            .map((products: Product[]): Product => {
                return products
                    .filter(product => product.id == id)
                    .shift();
            });
    }

    protected applyFilterAndSorting (products: Product[], filterText: string, sortingDescriptor: SortingDescriptor) {
        return _.chain(products)
            .thru((products) => this.productFilterPipe.transform(products, filterText))
            .thru((products) => this.productSortPipe.transform(products, sortingDescriptor))
            .value();
    }
}