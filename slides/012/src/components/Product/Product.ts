import {Component} from '@angular/core';
import {Product} from '../../entities/Product';

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
export default class ProductComponent {
    public product : Product;
}
