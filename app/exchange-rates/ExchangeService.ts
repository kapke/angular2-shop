import {Observable} from 'rxjs/Rx';
import {Observer} from "rxjs/Observer";

export default class ExchangeService {
    getExchangeRate (from: string, to: string): Observable<number> {
        if(from == 'USD' && to == 'PLN') {
            return Observable.create((observer: Observer<number>) =>{
                observer.next(3.99);
                observer.complete();
            });
        } else {
            return Observable.never();
        }
    }
}
