import {Component} from 'angular2/core';

@Component({
    selector: 's-product',
    // So we need to create a binding between property in HTML and field in component object.
    inputs: ['product'],
    template: `
        <div>
            <header>{{ product.name }}</header>
            <span class="price">{{ product.price }}</span>
        </div>
    `
})
//3/ And product component looks as follows
export default class Product {
    public product;
}
