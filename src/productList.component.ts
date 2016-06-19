import {Component, Input} from '@angular/core';
import {ProductComponent} from "./product.component";

@Component({
    selector: 's-product-list',
    directives: [ProductComponent],
    template: `
        <s-product *ngFor="let product of products" [product]="product"></s-product>
    `,
    styles: [`
        :host {
            display: flex;
            flex-wrap: wrap;
        }
    `]
})
export class ProductListComponent {
    @Input() public products: Array<{name: string, price: number}> = [];
}