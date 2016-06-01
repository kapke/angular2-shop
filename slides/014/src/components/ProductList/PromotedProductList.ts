import {Component} from '@angular/core';
import ProductListComponent from "./ProductList";
import {Product} from "../../entities/Product";

@Component({
    selector: 'promoted-product-list',
    inputs: ['products'],
    directives: [ProductListComponent],
    //4/ There we have first example of using events, curly braces indicates we will attach some code to given event
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

    //3/ Our handler is simple switch. Notify that we didn't make anything to make this method available in template
    togglePromoted () {
        this.showPromoted = !this.showPromoted;
    }
}
