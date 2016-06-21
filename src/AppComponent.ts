import { Component } from '@angular/core';

import {ProductListComponent} from "./ProductListComponent";
import {PromotedProductListComponent} from "./PromotedProductListComponent";
import {Product} from "./Product";


@Component({
    selector: 's-app',
    directives: [ProductListComponent, PromotedProductListComponent],
    template: `
        <main>
            <label>Search: <input #filterInput type="text" (keyup)="filterProducts(filterInput.value)"></label>
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
    public promotedProducts: Product[] = this.getPromotedProducts();
    public products: Product[] = this.getProducts();

    public filterProducts (filterText) {
        function filter (product: Product): boolean {
            return product.toString().includes(filterText);
        }

        this.promotedProducts = this.getPromotedProducts().filter(filter);
        this.products = this.getProducts().filter(filter);
    }

    getPromotedProducts (): Product[] {
        return [
            new Product('Dell XPS 13', 1500, ['super', 'new']),
            new Product('Dell XPS 15', 1750, ['new', 'efficient']),
            new Product('Lenovo Thinkpad X260', 180, ['carbon'])
        ];
    }

    getProducts (): Product[] {
       return [
           new Product('Lenovo Thinkpad T460', 1000, ['solid']),
           new Product('Lenovo Thinkpad T460p', 1200, ['solid', 'efficient']),
           new Product('Lenovo Thinkpad T460s', 1300, ['lightweight']),
           new Product('Lenovo Thinkpad T560', 1050),
           new Product('Lenovo Thinkpad T560p', 1250),
           new Product('Lenovo Thinkpad T560s', 1350),
           new Product('Dell Latitude e5470', 950, ['efficient']),
           new Product('Dell Latitude e5570', 1150),
           new Product('Dell Latitude e5770', 1250),
           new Product('Dell Latitude e3470', 750),
           new Product('Dell Latitude e3570', 850),
           new Product('Dell Latitude e3770', 90)
       ];
    }
}
