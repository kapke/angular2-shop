import {Component} from 'angular2/core';
import {COMMON_DIRECTIVES} from 'angular2/common';
import Product from '../../entities/Product';

@Component({
    selector: 's-product',
    inputs: ['product'],
    directives: [COMMON_DIRECTIVES],
    //4/ And formatting price in any currency is much simpler when using specialized pipe
    template: `
        <div>
            <header>{{ product.name }}</header>
            <span class="price">{{ product.price | currency:'USD':true }}</span>
            <div>
                <span *ngFor="#tag of product.tags">{{ tag }}</span>
            </div>
        </div>
    `
})
export default class ProductComponent {
    public product : Product;
}
