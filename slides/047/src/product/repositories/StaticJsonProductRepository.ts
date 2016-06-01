import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {ProductRepository} from "./ProductRepository";
import Product from "../entities/Product";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/map";
import "rxjs/add/operator/retryWhen";
import "rxjs/add/operator/delay";
import "rxjs/add/operator/scan";

@Injectable()
export default class StaticJsonProductRepository implements ProductRepository {
    private productsPath = 'data/products.json';
    private promotedProductsPath = 'data/promoted-products.json';

    constructor (private http: Http) {
        console.log('Static JSON Repository');
    }

    getProducts (path = this.productsPath): Observable<Product[]> {
        return this.http.get(path)
            .map(res => res.json())
            .map(data => data.map(Product.fromObject))
            .retryWhen((errors) => {
                return errors.scan((errorsCount: number, err) => {
                        if (errorsCount >= 5) {
                            throw err;
                        } else {
                            return errorsCount + 1;
                        }
                    }, 0)
                    .delay(500);
            });
    }

    getPromotedProducts () {
        return this.getProducts(this.promotedProductsPath);
    }

    getFailingProducts () {
        return this.getProducts('non-existing-path');
    }
}
