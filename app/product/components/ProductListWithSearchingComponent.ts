import {Component, Inject} from 'angular2/core';
import ProductListComponent from './ProductListComponent';
import PromotedProductListComponent from './PromotedProductListComponent';
import ProductFilterPipe from '../pipes/ProductFilterPipe';
import ProductSortPipe from '../pipes/ProductSortPipe';
import {Product, ProductRepository} from '../product';
import {SortingPanelComponent, SortingOption, SortingDescriptor} from "../../search/search";

@Component({
    selector: 'product-list-with-searching',
    directives: [ProductListComponent, PromotedProductListComponent, SortingPanelComponent],
    pipes: [ProductFilterPipe, ProductSortPipe],
    templateUrl: 'built/app/product/components/product-list-with-searching.html'
})
export default class ProductListWithSearchingComponent {
    public products: Product[] = [];
    public promotedProducts: Product[] = [];
    public sortingDescriptor:SortingDescriptor = {property: 'price', direction: 0};
    public sortingOptions:SortingOption[] = [
        {name: 'Price', property: 'price'},
        {name: 'Name', property: 'name'}
    ];

    private filterText: string = '';

    constructor (@Inject("ProductRepository") private productRepository: ProductRepository) {
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
