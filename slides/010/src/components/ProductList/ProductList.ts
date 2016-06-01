import {Component} from '@angular/core';
import {COMMON_DIRECTIVES} from '@angular/common';

@Component({
    selector: 'product-list',
    // If we want to use any directive in our template, we need to tell Angular that we will use it
    directives: [COMMON_DIRECTIVES],
    //4/ Then we can use it. Look into *ngFor and let product tokens, aren't they strange?
    template: `
        <ul>
            <li *ngFor="let product of products">
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
