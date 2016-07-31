import {Component, Inject} from '@angular/core';
import {Observable} from "rxjs/Rx";

import {ProductListComponent} from "./ProductListComponent";
import {PromotedProductListComponent} from "./PromotedProductListComponent";
import {Product} from "./Product";
import {SortingButtonComponent} from './SortingButtonComponent';
import {SortingDescriptor} from "./SortingDescriptor";
import {ProductFilterPipe} from "./ProductFilterPipe";
import {ProductSortPipe} from "./ProductSortPipe";
import {OrderFormComponent} from './OrderFormComponent';
import {ProductRepository, ProductRepositoryToken} from "./ProductRepository";
import {HttpProductRepository} from "./HttpProductRepository";

@Component({
    selector: 's-app',
    directives: [ProductListComponent, PromotedProductListComponent, SortingButtonComponent, OrderFormComponent],
    providers: [ProductSortPipe, ProductFilterPipe, {provide: ProductRepositoryToken, useClass: HttpProductRepository}],
    template: `
        <main>
            <label>Search: <input #filterInput type="text" (keyup)="updateFilterText(filterInput.value)"></label>
            <div>
                Sort: 
                <s-sorting-button [name]="'price'" [sortingDescriptor]="sortingDescriptor" (sortingDescriptorChange)="updateSortingDescriptor($event)">Price</s-sorting-button>
                <s-sorting-button [name]="'name'" [sortingDescriptor]="sortingDescriptor" (sortingDescriptorChange)="updateSortingDescriptor($event)">Name</s-sorting-button>
            </div>
            <s-product-list [products]="advertisedProducts | async"></s-product-list>
            <s-promoted-product-list [products]="promotedProducts | async"></s-promoted-product-list>
            <hr />
            <s-product-list [products]="products | async"></s-product-list>
            <hr />
            <s-order-form></s-order-form>
        </main>
    `,
    styles: [`
        :host {
            font-family: sans-serif;
        }
    `]
})
export class AppComponent {
    public promotedProducts: Observable<Product[]>;
    public products: Observable<Product[]>;
    public advertisedProducts: Observable<Product[]>;
    public sortingDescriptor: SortingDescriptor = SortingDescriptor.empty;
    public filterText: string = '';

    constructor (@Inject(ProductRepositoryToken) private productRepository: ProductRepository) {
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
        this.advertisedProducts = this.productRepository.findAdvertisedProducts(this.filterText, this.sortingDescriptor);
    }
}