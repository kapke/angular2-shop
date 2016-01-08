import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import ProductRepository from "./ProductRepository";
import {Observable} from "rxjs/Observable";
import Product from "../entities/Product";

@Injectable()
export default class StaticJsonProductRepository {
    constructor (private http: Http) {
    }

    getProducts () {
        return this.http.get('data/products.json');
    }

    getPromotedProducts () {
        return this.http.get('data/promoted-products.json');
    }
}
