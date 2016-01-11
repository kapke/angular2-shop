import {Pipe} from 'angular2/core';
import ExchangeService from "./ExchangeService";

@Pipe({
    name: 'exchange',
    pure: false
})
export default class ExchangePipe {
    private currentValue: number = null;

    constructor (private exchangeService: ExchangeService) {
    }

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
