import * as _ from "lodash";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";

import {Product} from "./Product";
import {SortingDescriptor} from "../SortingDescriptor";
import {ProductFilterPipe} from "./ProductFilterPipe";
import {ProductSortPipe} from "./ProductSortPipe";
import {ProductRepository} from "./ProductRepository";


@Injectable()
export class InMemoryProductRepository implements ProductRepository {
    constructor(private productFilterPipe: ProductFilterPipe, private productSortPipe: ProductSortPipe) {}

    private get promotedProducts () : Product[] {
        return [
            new Product('Dell XPS 13', 1500, ['super', 'new']),
            new Product('Dell XPS 15', 1750, ['new', 'efficient']),
            new Product('Lenovo Thinkpad X260', 180, ['carbon'])
        ];
    }

    private get products () : Product[] {
        return [
            new Product('Lenovo Thinkpad T460', 1000, ['solid']),
            new Product('Lenovo Thinkpad T460p', 1200, ['solid', 'efficient']),
            new Product('Lenovo Thinkpad T460s', 1300, ['lightweight']),
            new Product('Lenovo Thinkpad T560', 1050),
            new Product('Lenovo Thinkpad T560p', 1250),
            new Product('Lenovo Thinkpad T560s', 1350),
            new Product('Dell Latitude e5470', 950, ['efficient']),
            new Product('Dell Latitude e5570', 1150),
            new Product('Dell Latitude e5770', 1250),
            new Product('Dell Latitude e3470', 750),
            new Product('Dell Latitude e3570', 850),
            new Product('Dell Latitude e3770', 90)
        ];
    }

    public findAdvertisedProducts (filterText: string, sortingDescriptor: SortingDescriptor): Observable<Product[]> {
        return Observable.from([[]]);
    }

    public findPromotedProducts (filterText: string, sortingDescriptor: SortingDescriptor): Observable<Product[]> {
        return Observable.from([this.applyFilterAndSorting(this.promotedProducts, filterText, sortingDescriptor)]);
    }

    public findProducts (filterText: string, sortingDescriptor: SortingDescriptor): Observable<Product[]> {
        return Observable.from([this.applyFilterAndSorting(this.products, filterText, sortingDescriptor)]);
    }

    private applyFilterAndSorting (products: Product[], filterText: string, sortingDescriptor: SortingDescriptor) {
        return _.chain(products)
            .thru((products) => this.productFilterPipe.transform(products, filterText))
            .thru((products) => this.productSortPipe.transform(products, sortingDescriptor))
            .value();
    }
}