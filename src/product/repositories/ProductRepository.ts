import Product from "../entities/Product";
import {Observable} from "rxjs/Rx";

interface ProductRepository {
    getProducts (): Observable<Product[]>;
    getPromotedProducts (): Observable<Product[]>;
    getBySlug (slug: string): Observable<Product>;
}

abstract class AbstractProductRepository implements ProductRepository {
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
