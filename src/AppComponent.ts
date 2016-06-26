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
    pipes: [ProductFilterPipe, ProductSortPipe],
    providers: [ProductRepository],
    template: `
        <main>
            <label>Search: <input #filterInput type="text" (keyup)="updateFilterText(filterInput.value)"></label>
            <div>
                Sort: 
                <s-sorting-button [name]="'price'" [sortingDescriptor]="sortingDescriptor" (sortingDescriptorChange)="updateSortingDescriptor($event)">Price</s-sorting-button>
                <s-sorting-button [name]="'name'" [sortingDescriptor]="sortingDescriptor" (sortingDescriptorChange)="updateSortingDescriptor($event)">Name</s-sorting-button>
            </div>
            <s-promoted-product-list [products]="promotedProducts|sProductFilter:filterText|sProductSort:sortingDescriptor"></s-promoted-product-list>
            <hr />
            <s-product-list [products]="products|sProductFilter:filterText|sProductSort:sortingDescriptor"></s-product-list>
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

    constructor (productRepository: ProductRepository) {
        this.promotedProducts = productRepository.findPromotedProducts();
        this.products = productRepository.findProducts();
    }

    public updateFilterText (filterText: string) {
        this.filterText = filterText;
    }

    public updateSortingDescriptor (sortingDescriptor: SortingDescriptor) {
        this.sortingDescriptor = sortingDescriptor;
    }
}