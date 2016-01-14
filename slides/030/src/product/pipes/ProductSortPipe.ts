import {Pipe} from 'angular2/core';
import Product from "../entities/Product";

@Pipe({
    name: 'productSort'
})
export default class ProductSortPipe {
    transform (items, [sortingDescriptor]) {
        return items.sort(this.compareProducts.bind(null, sortingDescriptor));
    }

    private compareProducts = (sortingDescriptor, product1: Product, product2: Product) : number => {
        return Product.compare(sortingDescriptor.property, product1, product2)*sortingDescriptor.direction;
    };
}
