import {Pipe} from '@angular/core';
import Product from "../entities/Product";

//3/ 2. Then we annotate it as a pipe with name
@Pipe({
    name: 'productFilter'
})
//4/ 1. To create a pipe we need a class with `transform` method implemented
export default class ProductFilter {
    public transform (items, [filterText]) {
        return items.filter(this.filterProducts.bind(null, filterText));
    }

    private filterProducts (filterText: string, product: Product) {
        if(!filterText || !filterText.length) {
            return true;
        } else {
            return product.toString().toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase()) != -1;
        }
    };
}
