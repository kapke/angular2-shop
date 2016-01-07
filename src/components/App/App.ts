import {Component, View} from 'angular2/core';
import {Product, ProductRepository, PRODUCT_DIRECTIVES, PRODUCT_PIPES} from '../../product/product';
import {SortingPanelComponent, SortingOption, SortingDescriptor} from "../../search/search";
import OrderForm from '../OrderForm/OrderForm';
import StaticJsonProductRepository from "../../product/repositories/StaticJsonProductRepository";

@Component({
    selector: 'my-app',
    directives: [PRODUCT_DIRECTIVES, SortingPanelComponent, OrderForm],
    pipes: [PRODUCT_PIPES],
    templateUrl: 'dist/components/App/my-app.html',
})
export default class App {
    public title: string = 'Shop';
    public products: Product[] = [];
    public promotedProducts: Product[] = [];
    public sortingDescriptor:SortingDescriptor = {property: 'price', direction: 0};
    public sortingOptions:SortingOption[] = [
        {name: 'Price', property: 'price'},
        {name: 'Name', property: 'name'}
    ];

    private filterText: string = '';

    constructor (private staticJsonProductRepository: StaticJsonProductRepository) {
        this.updateProducts();
        this.staticJsonProductRepository.getFailingProducts()
            .subscribe(
                data => console.log('data', data),
                error => console.log('error', error),
                () => {console.log('end')}
            );
    }

    public onFilterChange (newFilter: string) {
        this.filterText = newFilter;
        this.updateProducts();
    }

    public onSortChange (descriptor) {
        this.sortingDescriptor = descriptor;
        this.updateProducts();
    }

    private updateProducts () {
        this.staticJsonProductRepository.getProducts()
            .subscribe(
                products => this.products = products,
                error => console.log('error', error),
                () => {console.log('end')}
            );
        this.staticJsonProductRepository.getPromotedProducts()
            .subscribe(
                promotedProducts => this.promotedProducts = promotedProducts,
                error => console.log('error', error),
                () => {console.log('end')}
            );
    }
}
