import {Component, View} from '@angular/core';
import {Product, ProductRepository, PRODUCT_DIRECTIVES, PRODUCT_PIPES} from '../../product/product';
import {SortingPanelComponent, SortingOption, SortingDescriptor} from "../../search/search";

@Component({
    selector: 'my-app',
    directives: [PRODUCT_DIRECTIVES, SortingPanelComponent],
    pipes: [PRODUCT_PIPES],
    templateUrl: 'src/components/App/my-app.html',
})
export default class App {
    private filterText: string = '';

    public title: string = 'Shop';
    public products: Product[] = [];
    public promotedProducts: Product[] = [];
    public sortingDescriptor:SortingDescriptor = {property: 'price', direction: 0};
    public sortingOptions:SortingOption[] = [
        {name: 'Price', property: 'price'},
        {name: 'Name', property: 'name'}
    ];

    //3/ There we declare that this class needs ProductRepository, type hinting is required for that!
    constructor (private productRepository: ProductRepository) {
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
        this.products = this.productRepository.getProducts();
        this.promotedProducts = this.productRepository.getPromotedProducts();
    }
}
