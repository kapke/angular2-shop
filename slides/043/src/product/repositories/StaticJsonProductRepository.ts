import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import ProductRepository from "./ProductRepository";
import {Observable} from "rxjs/Observable";
import Product from "../entities/Product";
import "rxjs/add/operator/map";
import "rxjs/add/operator/retryWhen";
import "rxjs/add/operator/delay";
import "rxjs/add/operator/scan";

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
            //10/ It even allows us to make 5 delayed retries
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
