import {Component} from 'angular2/core';
import {COMMON_DIRECTIVES} from 'angular2/common';
import ProductComponent from "./ProductComponent";
import {Product} from './../product';

@Component({
    selector: 'product-list',
    directives: [COMMON_DIRECTIVES, ProductComponent],
    inputs: ['products'],
    template: `
        <div class="clearfix">
            <ul clas="row">
                <li *ngFor="#product of products" class="col col-sm-3">
                    <s-product [product]="product"></s-product>
                </li>
            </ul>
        </div>
    `,
    styles: [
        `div {
            margin: 15px -15px;
        }`,
        `ul {
            padding: 0
        }`,
        `li {
            list-style-type: none;
        }`
    ]
})
export default class ProductListComponent {
    public products : Product[] = [];
}
