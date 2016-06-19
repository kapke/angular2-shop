import { Component } from '@angular/core';

@Component({
    selector: 's-app',
    template: `
        <div *ngFor="let product of products" class="product">
            <header>{{ product.name }}</header>
            <span>Price: \${{ product.price }}</span>
        </div>
    `,
    styles: [
        `
        :host {
            display: flex;
            flex-wrap: wrap;
        }
        .product {
            border: 1px solid black;
            margin: 1em;
            padding: 1em;
            flex-grow: 0;
            flex-basis: 10em;
        }
        `
    ]
})
export class AppComponent {
    public products: Array<{name: string, price: number}> = [
        {name: 'Lenovo Thinkpad T460', price: 1000},
        {name: 'Lenovo Thinkpad T460p', price: 1200},
        {name: 'Lenovo Thinkpad T460s', price: 1300},
        {name: 'Lenovo Thinkpad T560', price: 1050},
        {name: 'Lenovo Thinkpad T560p', price: 1250},
        {name: 'Lenovo Thinkpad T560s', price: 1350},
        {name: 'Dell Latitude e5470', price: 950},
        {name: 'Dell Latitude e5570', price: 1150},
        {name: 'Dell Latitude e5770', price: 1250},
        {name: 'Dell Latitude e3470', price: 750},
        {name: 'Dell Latitude e3570', price: 850},
        {name: 'Dell Latitude e3770', price: 900}
    ];
}
