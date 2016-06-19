import { Component, Input } from '@angular/core';

import {Product} from "./Product";
import {TagsComponent} from "./TagsComponent";


@Component({
    selector: 's-product',
    directives: [TagsComponent],
    template: `
        <div>
            <header>{{ product.name }}</header>
            <span>Price: {{ '$'+product.price }}</span>
            <s-tags [tags]="product.tags"></s-tags>
        </div>
    `,
    styles: [`
        :host {
            border: 1px solid black;
            margin: 1rem;
            padding: 1rem;
            flex-grow: 0;
            flex-basis: 15em;
        }
    `]
})
export class ProductComponent {
    @Input() public product: Product;
}