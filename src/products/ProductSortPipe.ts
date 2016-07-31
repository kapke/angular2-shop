import {Pipe, PipeTransform} from "@angular/core";
import {Product, ProductComparator} from "./Product";
import {SortingDescriptor} from "../SortingDescriptor";


@Pipe({
    name: 'sProductSort'
})
export class ProductSortPipe implements PipeTransform {
    transform(products: Product[], sortingDescriptor: SortingDescriptor): Product[] {
        let comparator: ProductComparator;
        try {
            comparator = Product.getComparator(sortingDescriptor);
        } catch (e) {
            comparator = () => 0;
        }
        
        return products.sort(comparator);
    }
}