import {Component} from '@angular/core';
import {COMMON_DIRECTIVES} from '@angular/common';
import Product from "../Product/Product";

@Component({
    selector: 'product-list',
    directives: [COMMON_DIRECTIVES, Product],
    template: `
        <ul>
            <li *ngFor="let product of products">
                <s-product [product]="product"></s-product>
            </li>
        </ul>
    `
})
export default class ProductList {
    public products = [
        {name: 'Coffee', price: '$5'},
        {name: 'Tea', price: '$4'},
        {name: 'Yerba', price: '$4'}
    ];
}
