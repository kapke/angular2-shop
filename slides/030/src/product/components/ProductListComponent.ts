import {Component} from '@angular/core';
import {COMMON_DIRECTIVES} from '@angular/common';
import ProductComponent from "./ProductComponent";
import Product from './../entities/Product';

@Component({
    selector: 'product-list',
    directives: [COMMON_DIRECTIVES, ProductComponent],
    inputs: ['products'],
    template: `
        <ul>
            <li *ngFor="let product of products">
                <s-product [product]="product"></s-product>
            </li>
        </ul>
    `
})
export default class ProductListComponent {
    public products : Product[] = [];
}
