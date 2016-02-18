import {Component, View} from 'angular2/core';
import ProductListComponent from '../ProductList/ProductList';
import PromotedProductListComponent from '../ProductList/PromotedProductList';
import Product from "../../entities/Product";
import SortingButton from '../Sort/SortingButton';

@Component({
    selector: 'my-app',
    // The only change we made for use that button was to add it's class to directives list
    directives: [ProductListComponent, PromotedProductListComponent, SortingButton],
    templateUrl: 'src/components/App/my-app.html',
})
export default class App {
    private filter: string = '';
    public title: string = 'Shop';
    public products: Product[] = [];
    public promotedProducts: Product[] = [];
    public sortingDescriptor = {property: 'price', direction: 0};

    constructor () {
        this.updateProducts();
    }

    public onFilterChange (newFilter: string) {
        this.filter = newFilter;
        this.updateProducts();
    }

    public onSortChange (property) {
        this.sortingDescriptor.property = property;
        this.sortingDescriptor.direction = this.getNextSortingDirection(this.sortingDescriptor.direction);
        this.updateProducts();
    }

    private getNextSortingDirection (sortingDirection: number) {
        if(sortingDirection == 1) {
            return -1;
        } else {
            return sortingDirection + 1;
        }
    }

    private updateProducts () {
        this.products = this.getProducts()
            .filter(this.filterProducts)
            .sort(this.compareProducts);
        this.promotedProducts = this.getPromotedProducts()
            .filter(this.filterProducts)
            .sort(this.compareProducts);
    }

    private filterProducts = (product: Product) => {
        if(!this.filter.length) {
            return true;
        } else {
            return product.toString().toLocaleLowerCase().indexOf(this.filter.toLocaleLowerCase()) != -1;
        }
    };

    private compareProducts = (product1: Product, product2: Product) : number => {
        return Product.compare(this.sortingDescriptor.property, product1, product2)*this.sortingDescriptor.direction;
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
