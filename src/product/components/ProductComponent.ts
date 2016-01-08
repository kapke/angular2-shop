import {Component} from 'angular2/core';
import {COMMON_DIRECTIVES} from 'angular2/common';
import {ROUTER_DIRECTIVES} from "angular2/router";
import {Product} from './../product';

@Component({
    selector: 's-product',
    inputs: ['product'],
    directives: [COMMON_DIRECTIVES, ROUTER_DIRECTIVES],
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">
                <header class="panel-title"><a [routerLink]="['Product', {'slug': product.slug}]">{{ product.name }}</a></header>
            </div>
            <div class="panel-body">
                <span class="price">{{ product.price | currency:'USD':true }}</span>
                <div>
                    <span *ngFor="#tag of product.tags">{{ tag }}</span>
                </div>
            </div>
        </div>
    `
})
export default class ProductComponent {
    public product : Product;
}
