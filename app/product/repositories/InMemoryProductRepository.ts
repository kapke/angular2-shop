import Product from "../entities/Product";
import {Observable} from "rxjs/Rx";
import {AbstractProductRepository} from "./ProductRepository";

export default class InMemoryProductRepository extends AbstractProductRepository {
    constructor () {
        super();
    }

    public getProducts (): Observable<Product[]> {
        return Observable.create((observer) => {
            observer.next([
                new Product('Yerba', 4, ['Strong']),
                new Product('Coffee', 5),
                new Product('Tea', 4, ['Great', 'Super'])
            ]);
            observer.complete();
        });
    }

    public getPromotedProducts (): Observable<Product[]> {
        return Observable.create((observer) => {
            observer.next([
                new Product('Latte', 10),
                new Product('Green Tea', 7)
            ]);
            observer.complete();
        });
    }
}
