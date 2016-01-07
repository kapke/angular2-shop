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
                response => {
                    console.log('response', response);
                    const data = response.json();
                    this.products =  data.map(item => new Product(item.name, item.price, item.tags))
                },
                data => console.log('error', data),
                () => {console.log('end')}
            );
        this.staticJsonProductRepository.getPromotedProducts()
            .subscribe(
                response => {
                    console.log('response', response);
                    const data = response.json();
                    this.promotedProducts =  data.map(item => new Product(item.name, item.price, item.tags))
                },
                data => console.log('error', data),
                () => {console.log('end')}
            );
    }
}
