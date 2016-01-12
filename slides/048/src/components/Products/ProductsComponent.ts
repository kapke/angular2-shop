import {Component, Inject} from 'angular2/core';
import {Product, ProductRepository, StaticJsonProductRepository, PRODUCT_DIRECTIVES, PRODUCT_PIPES} from '../../product/product';
import {SortingPanelComponent, SortingOption, SortingDescriptor} from "../../search/search";

@Component({
    selector: 's-products',
    directives: [PRODUCT_DIRECTIVES, SortingPanelComponent],
    pipes: [PRODUCT_PIPES],
    templateUrl: 'dist/components/Products/products.html',
})
export default class ProductsComponent {
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
