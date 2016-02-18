import Product from "../entities/Product";
import {Observable} from "rxjs/Rx";
import {ProductRepository} from "./ProductRepository";

//4/ There the only change was to replace `extends` with `implements` and remove `super` call
export default class InMemoryProductRepository implements ProductRepository {
    constructor () {
        console.log('In memory Repository');
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
