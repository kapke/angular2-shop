import {Component} from 'angular2/core';
import {COMMON_DIRECTIVES} from 'angular2/common';
import ProductComponent from "../Product/Product";
import Product from '../../entities/Product';

@Component({
    selector: 'product-list',
    directives: [COMMON_DIRECTIVES, ProductComponent],
    inputs: ['products'],
    template: `
        <ul>
            <li *ngFor="#product of products">
                <s-product [product]="product"></s-product>
            </li>
        </ul>
    `
})
export default class ProductListComponent {
    public products : Product[] = [];
}
