import Product from "../entities/Product";
import {Observable} from "rxjs/Rx";

interface ProductRepository {
    getProducts (): Observable<Product[]>;
    getPromotedProducts (): Observable<Product[]>;
    //As we need ability to get product by slug, we add that declaration to interface
    getBySlug (slug: string): Observable<Product>;
}

//In our existing implementations getting by slug would be exactly the same code, so we create base class
abstract class AbstractProductRepository implements ProductRepository {
    //12/ And implement required method
    public getBySlug (slug: string): Observable<Product> {
        return Observable
            .concat(this.getProducts(), this.getPromotedProducts())
            .reduce((acc, products) => {
                return acc.concat(products);
            }, [])
            .map(products => {
                return products
                    .filter(product => product.slug == slug)
                    .shift();
            });
    }


}

export {ProductRepository, AbstractProductRepository};
