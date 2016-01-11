import {Component} from 'angular2/core';
import {COMMON_DIRECTIVES} from 'angular2/common';
import ProductComponent from "./ProductComponent";
import {Product} from './../product';

@Component({
    selector: 'product-list',
    directives: [COMMON_DIRECTIVES, ProductComponent],
    inputs: ['products'],
    template: `
        <ul class="container-fluid">
            <li *ngFor="#product of products" class="col col-sm-2">
                <s-product [product]="product"></s-product>
            </li>
        </ul>
    `,
    styles: [
        `li {
            list-style-type: none;
        }`
    ]
})
export default class ProductListComponent {
    public products : Product[] = [];
}
