import {Component} from 'angular2/core';
import {COMMON_DIRECTIVES} from 'angular2/common';

@Component({
    selector: 'product-list',
    directives: [COMMON_DIRECTIVES],
    template: `
        <ul>
            <li *ngFor="#product of products">
                <header>{{ product.name }}</header>
                <span class="price">{{ product.price }}</span>
            </li>
        </ul>
    `
})
export default class ProductList {
    private products = [
        {name: 'Coffee', price: '$5'},
        {name: 'Tea', price: '$4'},
        {name: 'Yerba', price: '$4'}
    ];
}
