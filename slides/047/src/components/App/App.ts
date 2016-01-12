import {Component, View, Inject} from 'angular2/core';
import {Product, ProductRepository, StaticJsonProductRepository, PRODUCT_DIRECTIVES, PRODUCT_PIPES} from '../../product/product';
import {SortingPanelComponent, SortingOption, SortingDescriptor} from "../../search/search";
import OrderForm from '../OrderForm/OrderForm';

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

    constructor (@Inject("ProductRepository") private productRepository: ProductRepository) {
        console.log(productRepository);
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
        this.productRepository.getProducts()
            .subscribe(
                products => this.products = products,
                error => console.log('error', error),
                () => {console.log('end')}
            );
        this.productRepository.getPromotedProducts()
            .subscribe(
                promotedProducts => this.promotedProducts = promotedProducts,
                error => console.log('error', error),
                () => {console.log('end')}
            );
    }
}
