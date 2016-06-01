import {Component} from '@angular/core';
import {COMMON_DIRECTIVES} from '@angular/common';
import {ROUTER_DIRECTIVES} from "@angular/router-deprecated";
import Product from '../entities/Product';

@Component({
    selector: 's-product',
    inputs: ['product'],
    directives: [COMMON_DIRECTIVES, ROUTER_DIRECTIVES],
    //4/ To create links with parameters we add an object as second item in array
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">
                <header class="panel-title"><a [routerLink]="['Product', {'slug': product.slug}]">{{ product.name }}</a></header>
            </div>
            <div class="panel-body">
                <span class="price">{{ product.price | currency:'USD':true }}</span>
                <div>
                    <span *ngFor="let tag of product.tags">{{ tag }}</span>
                </div>
            </div>
        </div>
    `
})
export default class ProductComponent {
    public product : Product;
}
