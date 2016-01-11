import {Component} from 'angular2/core';
import {COMMON_DIRECTIVES} from 'angular2/common';
import {ROUTER_DIRECTIVES} from "angular2/router";
import {Product} from './../product';
import ExchangePipe from "../../exchange-rates/ExchangePipe";

@Component({
    selector: 's-product',
    inputs: ['product'],
    directives: [COMMON_DIRECTIVES, ROUTER_DIRECTIVES],
    pipes: [ExchangePipe],
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">
                <header class="panel-title"><a [routerLink]="['Product', {'slug': product.slug}]">{{ product.name }}</a></header>
            </div>
            <div class="panel-body">
                <p class="price">Price: {{ product.price | exchange:'USD':'PLN' | currency:'PLN':true }}</p>
                <div class="btn-group">
                    <span *ngFor="#tag of product.tags" class="btn btn-default">{{ tag }}</span>
                </div>
            </div>
        </div>
    `
})
export default class ProductComponent {
    public product : Product;
}
