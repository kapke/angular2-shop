import * as _ from 'lodash';
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";

import {Product} from "./Product";
import {ProductFilterPipe} from "./ProductFilterPipe";
import {ProductSortPipe} from "./ProductSortPipe";
import {ProductRepository} from "./ProductRepository";
import {SortingDescriptor} from "../SortingDescriptor";


interface ProductDescription {
    name: string;
    price: number;
    tags?: string[];
}

@Injectable()
export class HttpProductRepository implements ProductRepository {
    constructor (private http: Http, private productFilterPipe: ProductFilterPipe, private productSortPipe: ProductSortPipe) {}

    public findAdvertisedProducts (filterText: string, sortingDescriptor: SortingDescriptor): Observable<Product[]> {
        return this.makeProductsRequest('advertisedProducts', filterText, sortingDescriptor);
    }

    public findPromotedProducts (filterText: string, sortingDescriptor: SortingDescriptor) : Observable<Product[]> {
        return this.makeProductsRequest('promotedProducts', filterText, sortingDescriptor);
    }

    public findProducts (filterText: string, sortingDescriptor: SortingDescriptor) : Observable<Product[]> {
        return this.makeProductsRequest('products', filterText, sortingDescriptor);
    }

    private makeProductsRequest (filename: string, filterText: string, sortingDescriptor: SortingDescriptor) : Observable<Product[]> {
        return this.http.get(`data/${filename}.json`)
            .retryWhen((errors) => {
                return errors
                    .delay(1000)
                    .scan((count: number, err: Response) => {
                        if (count >= 5) {
                            throw err;
                        } else {
                            return count + 1;
                        }
                    }, 0);
            })
            .map(res => res.json())
            .map((products: ProductDescription[]) => {
                return products.map(p => new Product(p.name, p.price, p.tags));
            })
            .map((products) => this.applyFilterAndSorting(products, filterText, sortingDescriptor));
    }

    private applyFilterAndSorting (products: Product[], filterText: string, sortingDescriptor: SortingDescriptor) {
        return _.chain(products)
            .thru((products) => this.productFilterPipe.transform(products, filterText))
            .thru((products) => this.productSortPipe.transform(products, sortingDescriptor))
            .value();
    }
}