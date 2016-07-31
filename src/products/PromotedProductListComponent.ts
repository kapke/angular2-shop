import {Component, Input} from '@angular/core';
import {ProductListComponent} from "./ProductListComponent";
import {Product} from "./Product";


@Component({
    selector: 's-promoted-product-list',
    directives: [ProductListComponent],
    template: `
        <div>
            <h2>Promoted products</h2>
            <s-product-list [products]="products"></s-product-list>
        </div>
    `,
    styles: [`
        h2 { 
            margin: 1rem; 
        }
    `]
})
export class PromotedProductListComponent {
    @Input() public products: Product[] = [];
}