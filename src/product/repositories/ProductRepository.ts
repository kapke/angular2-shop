import Product from "../entities/Product";
import {Observable} from "rxjs/Rx";

interface ProductRepository {
    getProducts (): Observable<Product[]>;
    getPromotedProducts (): Observable<Product[]>;
}

export {ProductRepository};
