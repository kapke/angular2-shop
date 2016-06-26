import { Component } from '@angular/core';

import {ProductListComponent} from "./ProductListComponent";
import {PromotedProductListComponent} from "./PromotedProductListComponent";
import {Product} from "./Product";
import {SortingButtonComponent} from './SortingButtonComponent';
import {SortingDescriptor} from "./SortingDescriptor";
import {ProductFilterPipe} from "./ProductFilterPipe";
import {ProductSortPipe} from "./ProductSortPipe";
import {ProductRepository} from "./ProductRepository";


@Component({
    selector: 's-app',
    directives: [ProductListComponent, PromotedProductListComponent, SortingButtonComponent],
    providers: [ProductRepository, ProductSortPipe, ProductFilterPipe],
    template: `
        <main>
            <label>Search: <input #filterInput type="text" (keyup)="updateFilterText(filterInput.value)"></label>
            <div>
                Sort: 
                <s-sorting-button [name]="'price'" [sortingDescriptor]="sortingDescriptor" (sortingDescriptorChange)="updateSortingDescriptor($event)">Price</s-sorting-button>
                <s-sorting-button [name]="'name'" [sortingDescriptor]="sortingDescriptor" (sortingDescriptorChange)="updateSortingDescriptor($event)">Name</s-sorting-button>
            </div>
            <s-promoted-product-list [products]="promotedProducts"></s-promoted-product-list>
            <hr />
            <s-product-list [products]="products"></s-product-list>
        </main>
    `,
    styles: [`
        :host {
            font-family: sans-serif;
        }
    `]
})
export class AppComponent {
    public promotedProducts: Product[] = [];
    public products: Product[] = [];
    public sortingDescriptor: SortingDescriptor = SortingDescriptor.empty;
    public filterText: string = '';

    constructor (private productRepository: ProductRepository) {
        this.updateProducts();
    }

    public updateFilterText (filterText: string) {
        this.filterText = filterText;

        this.updateProducts();
    }

    public updateSortingDescriptor (sortingDescriptor: SortingDescriptor) {
        this.sortingDescriptor = sortingDescriptor;

        this.updateProducts();
    }

    public updateProducts () {
        this.promotedProducts = this.productRepository.findPromotedProducts(this.filterText, this.sortingDescriptor);
        this.products = this.productRepository.findProducts(this.filterText, this.sortingDescriptor);
    }
}