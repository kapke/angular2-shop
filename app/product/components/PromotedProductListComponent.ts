import {Component} from 'angular2/core';
import ProductListComponent from "./ProductListComponent";
import {Product} from "../product";
import PromotedDirective from "../directives/PromotedDirective";

@Component({
    selector: 'promoted-product-list',
    inputs: ['products'],
    directives: [ProductListComponent, PromotedDirective],
    template: `
        <section class="promoted">
            <header><h3>Promoted products</h3></header>
            <button (click)="togglePromoted()" class="btn btn-default">Toggle promoted products</button>
            <product-list *ngIf="showPromoted" [products]="products" sPromoted></product-list>
        </section>
    `,
    styles: [
        `button {
            margin-bottom: 1em;
        }`,
        `product-list {
            margin-top: 1em;
        }`
    ]
})
export default class PromotedProductListComponent {
    public products: Product[] = [];
    public showPromoted:boolean = true;

    togglePromoted () {
        this.showPromoted = !this.showPromoted;
    }
}
