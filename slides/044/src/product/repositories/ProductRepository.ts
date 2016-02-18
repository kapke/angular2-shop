import Product from "../entities/Product";
import {Observable} from "rxjs/Rx";

export default class ProductRepository {
    //10/ To make both StaticJson and InMemory repository working the same way, we need to return Observable from InMemory
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
