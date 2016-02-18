import Product from "../entities/Product";
import {Observable} from "rxjs/Rx";

//8/ Abstraction make us sure that every subclass works the same way and we can switch implementations seamlessly
abstract class ProductRepository {
    public abstract getProducts (): Observable<Product[]>;
    public abstract getPromotedProducts (): Observable<Product[]>;

    constructor () {
        console.log('abstract constructor');
    }
}

export default ProductRepository;
