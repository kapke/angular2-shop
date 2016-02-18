import {Pipe} from 'angular2/core';
import ExchangeService from "./ExchangeService";

//4/ As we want to use observables, we need to mark pipe as not `pure`
@Pipe({
    name: 'exchange',
    pure: false
})
export default class ExchangePipe {
    private currentValue: number = null;

    //Then inject exchange service
    constructor (private exchangeService: ExchangeService) {
    }

    //5/ Finally we can implement our transform method
    transform (value: number, [from, to]: [string, string]): number {
        this.updateSubscription(from, to, value);

        return this.currentValue;
    }

    updateSubscription (from, to, value) {
        this.exchangeService
            .getExchangeRate(from, to)
            .subscribe(rate => this.currentValue = rate*value);
    }
}
