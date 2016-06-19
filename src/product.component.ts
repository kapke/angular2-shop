import { Component, Input } from '@angular/core';

@Component({
    selector: 's-product',
    template: `
        <div>
            <header>{{ product.name }}</header>
            <span>Price: {{ '$'+product.price }}</span>
        </div>
    `,
    styles: [`
        :host {
            border: 1px solid black;
            margin: 1em;
            padding: 1em;
            flex-grow: 0;
            flex-basis: 15em;
        }
    `]
})
export class ProductComponent {
    @Input() public product: {name: string, price: number};
}