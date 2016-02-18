import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import ProductRepository from "./ProductRepository";
import {Observable} from "rxjs/Observable";
import Product from "../entities/Product";

//@Injectable() tells Angular that it should look into constructor params and resolve them
@Injectable()
export default class StaticJsonProductRepository {
    //2/ There we inject http service
    constructor (private http: Http) {
    }

    //3/ And finally we can use it
    getProducts () {
        return this.http.get('data/products.json');
    }

    getPromotedProducts () {
        return this.http.get('data/promoted-products.json');
    }
}
