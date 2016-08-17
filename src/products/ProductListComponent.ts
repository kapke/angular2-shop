import {Component, Input} from '@angular/core';
import {ProductComponent} from "./ProductComponent";
import {Product} from "./Product";


@Component({
    selector: 's-product-list',
    directives: [ProductComponent],
    template: `
        <s-product *ngFor="let product of products" [product]="product" [routerLink]="['/products', product.id]"></s-product>
    `,
    styles: [`
        :host {
            display: flex;
            flex-wrap: wrap;
        }
    `]
})
export class ProductListComponent {
    @Input() public products: Product[] = [];
}