import * as _ from 'lodash';
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";

import {Product} from "./Product";
import {ProductFilterPipe} from "./ProductFilterPipe";
import {ProductSortPipe} from "./ProductSortPipe";
import {ProductRepository} from "./ProductRepository";
import {SortingDescriptor} from "../SortingDescriptor";
import {AbstractProductRepository} from "./AbstractProductRepository";


interface ProductDescription {
    id: string;
    name: string;
    price: number;
    tags?: string[];
}

@Injectable()
export class HttpProductRepository extends AbstractProductRepository implements ProductRepository {
    constructor (
        private http: Http,
        productFilterPipe: ProductFilterPipe,
        productSortPipe: ProductSortPipe
    ) {
        super(productFilterPipe, productSortPipe);
    }

    public findAdvertisedProducts (filterText: string, sortingDescriptor: SortingDescriptor): Observable<Product[]> {
        return this.fetchProducts('advertisedProducts', filterText, sortingDescriptor);
    }

    public findPromotedProducts (filterText: string, sortingDescriptor: SortingDescriptor) : Observable<Product[]> {
        return this.fetchProducts('promotedProducts', filterText, sortingDescriptor);
    }

    public findProducts (filterText: string, sortingDescriptor: SortingDescriptor) : Observable<Product[]> {
        return this.fetchProducts('products', filterText, sortingDescriptor);
    }

    protected getRawProducts(): Observable<Product[]> {
        return this.makeRequest('products');
    }

    protected getRawPromotedProducts(): Observable<Product[]> {
        return this.makeRequest('promotedProducts');
    }

    private fetchProducts (filename: string, filterText: string, sortingDescriptor: SortingDescriptor) : Observable<Product[]> {
        return this.makeRequest(filename)
            .map((products) => this.applyFilterAndSorting(products, filterText, sortingDescriptor));
    }

    private makeRequest (filename: string): Observable<Product[]> {
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
                return products.map(p => new Product(p.id, p.name, p.price, p.tags));
            });
    }
}