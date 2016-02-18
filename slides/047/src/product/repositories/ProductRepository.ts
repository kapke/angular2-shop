import Product from "../entities/Product";
import {Observable} from "rxjs/Rx";

//4/ As this class didn't implement any methods, we prefer to use interface
interface ProductRepository {
    getProducts (): Observable<Product[]>;
    getPromotedProducts (): Observable<Product[]>;
}

export {ProductRepository};
