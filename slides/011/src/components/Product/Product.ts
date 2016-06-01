import {Component} from '@angular/core';

@Component({
    selector: 's-product',
    inputs: ['product'],
    template: `
        <div>
            <header>{{ product.name }}</header>
            <span class="price">{{ product.price }}</span>
        </div>
    `
})
export default class Product {
    public product;
}
