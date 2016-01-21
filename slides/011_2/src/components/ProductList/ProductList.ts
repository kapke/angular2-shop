import {Component} from 'angular2/core';
import {COMMON_DIRECTIVES} from 'angular2/common';
import Product from "../Product/Product";

@Component({
    selector: 'product-list',
    directives: [COMMON_DIRECTIVES, Product],
    inputs: ['products'],
    template: `
        <ul>
            <li *ngFor="#product of products">
                <s-product [product]="product"></s-product>
            </li>
        </ul>
    `
})
export default class ProductList {
    public products = [];
}
