import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import ProductRepository from "./ProductRepository";
import {Observable} from "rxjs/Observable";
import Product from "../entities/Product";
import "rxjs/add/operator/map";
import "rxjs/add/operator/retryWhen";
import "rxjs/add/operator/delay";

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
            //4/ `retryWhen` allows us to completely take control over retrying process
            .retryWhen((errors) => {
                console.log(errors);
                return errors.delay(1000);
            });
    }

    getPromotedProducts () {
        return this.getProducts(this.promotedProductsPath);
    }

    getFailingProducts () {
        return this.getProducts('non-existing-path');
    }
}
