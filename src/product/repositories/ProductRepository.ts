import Product from "../entities/Product";
import {Observable} from "rxjs/Rx";

abstract class ProductRepository {
    public abstract getProducts (): Observable<Product[]>;
    public abstract getPromotedProducts (): Observable<Product[]>;

    constructor () {
        console.log('abstract constructor');
    }
}

export default ProductRepository;
