import {Component, View} from '@angular/core';
import ProductListComponent from '../ProductList/ProductList';
import PromotedProductListComponent from '../ProductList/PromotedProductList';
import Product from "../../entities/Product";

@Component({
    selector: 'my-app',
    directives: [ProductListComponent, PromotedProductListComponent],
    templateUrl: 'src/components/App/my-app.html'
})
export default class App {
    // 2. And text we will use as criteria
    private filter: string = '';
    public title: string = 'Shop';
    public products: Product[] = [];
    public promotedProducts: Product[] = [];

    constructor () {
        this.updateProducts();
    }

    //4/ 4. Finally filtering is working on TypeScript side
    public onFilterChange (newFilter: string) {
        this.filter = newFilter;
        this.updateProducts();
    }

    //4/ 3. Then we create a method for updating products available in template
    private updateProducts () {
        this.products = this.getProducts().filter(this.filterProducts);
        this.promotedProducts = this.getPromotedProducts().filter(this.filterProducts);
    }

    private filterProducts = (product: Product) => {
        if(!this.filter.length) {
            return true;
        } else {
            return product.name.indexOf(this.filter) != -1;
        }
    };

    //7/ 1. To perform filtering we need to have some source of data...
    private getProducts () {
        return [
            new Product('Coffee', '$5'),
            new Product('Tea', '$4', ['Great', 'Super']),
            new Product('Yerba', '$4', ['Strong'])
        ];
    }

    private getPromotedProducts () {
        return [
            new Product('Latte', '$10'),
            new Product('Green Tea', '$7')
        ];
    }
}
