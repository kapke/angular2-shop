import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import ProductRepository from "./ProductRepository";
import {Observable} from "rxjs/Observable";
import Product from "../entities/Product";
import "rxjs/add/operator/map";
import "rxjs/add/operator/retry";

@Injectable()
export default class StaticJsonProductRepository {
    private productsPath = 'data/products.json';
    private promotedProductsPath = 'data/promoted-products.json';

    constructor (private http: Http) {
    }

    getProducts (path = this.productsPath): Observable<Product[]> {
        return this.http.get(path)
            .map(res => res.json())
            .map(data => data.map(Product.fromObject))
            .retry(5);
    }

    getPromotedProducts () {
        return this.getProducts(this.promotedProductsPath);
    }

    getFailingProducts () {
        return this.getProducts('non-existing-path');
    }
}
