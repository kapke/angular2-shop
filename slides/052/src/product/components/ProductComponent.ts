import {Component} from '@angular/core';
import {COMMON_DIRECTIVES} from '@angular/common';
import Product from '../entities/Product';

@Component({
    selector: 's-product',
    inputs: ['product'],
    directives: [COMMON_DIRECTIVES],
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">
                <header class="panel-title">{{ product.name }}</header>
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
