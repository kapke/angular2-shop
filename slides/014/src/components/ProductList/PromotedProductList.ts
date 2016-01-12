import {Component} from 'angular2/core';
import ProductListComponent from "./ProductList";
import {Product} from "../../entities/Product";

@Component({
    selector: 'promoted-product-list',
    inputs: ['products'],
    directives: [ProductListComponent],
    template: `
        <section class="promoted">
            <header>Promoted products</header>
            <button (click)="togglePromoted()">Toggle promoted products</button>
            <product-list *ngIf="showPromoted" [products]="products"></product-list>
        </section>
    `
})
export default class PromotedProductListComponent {
    public products: Product[] = [];
    public showPromoted:boolean = true;

    togglePromoted () {
        this.showPromoted = !this.showPromoted;
    }
}
