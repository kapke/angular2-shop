import {Component, View} from 'angular2/core';
import ProductListComponent from '../ProductList/ProductList';
import PromotedProductListComponent from '../ProductList/PromotedProductList';
import Product from "../../entities/Product";

@Component({
    selector: 'my-app',
    directives: [ProductListComponent, PromotedProductListComponent],
    templateUrl: 'src/components/App/my-app.html'
})
export default class App {
    private filter: string = '';
    public title: string = 'Shop';
    public products: Product[] = [];
    public promotedProducts: Product[] = [];
    // 1. To achieve working sorting we need a field describing how to sort our products
    public sortingDescriptor = {property: 'price', direction: 0};

    constructor () {
        this.updateProducts();
    }

    public onFilterChange (newFilter: string) {
        this.filter = newFilter;
        this.updateProducts();
    }

    //4/ 2. Then we create a method for update that field and product list
    public onSortChange () {
        this.sortingDescriptor.direction = this.getNextSortingDirection(this.sortingDescriptor.direction);
        this.updateProducts();
    }

    //7/ 4. Then we create a helper method for getting next sorting direction
    private getNextSortingDirection (sortingDirection: number) {
        if(sortingDirection == 1) {
            return -1;
        } else {
            return sortingDirection + 1;
        }
    }

    //4/ 3. Then we update `updateProducts` with sort part.
    private updateProducts () {
        this.products = this.getProducts().filter(this.filterProducts).sort(this.compareProducts);
        this.promotedProducts = this.getPromotedProducts().filter(this.filterProducts).sort(this.compareProducts);
    }

    private filterProducts = (product: Product) => {
        if(!this.filter.length) {
            return true;
        } else {
            return product.toString().toLocaleLowerCase().indexOf(this.filter.toLocaleLowerCase()) != -1;
        }
    };

    //9/ 5. At the end we create a method for comparing 2 products
    private compareProducts = (product1: Product, product2: Product) : number => {
        let output: number;
        switch (this.sortingDescriptor.property) {
            case 'price':
                output = parseFloat(product1.price.replace('$', '')) - parseFloat(product2.price.replace('$', ''));
        }

        return output*this.sortingDescriptor.direction;
    };

    private getProducts () {
        return [
            new Product('Yerba', '$4', ['Strong']),
            new Product('Coffee', '$5'),
            new Product('Tea', '$4', ['Great', 'Super'])
        ];
    }

    private getPromotedProducts () {
        return [
            new Product('Latte', '$10'),
            new Product('Green Tea', '$7')
        ];
    }
}
