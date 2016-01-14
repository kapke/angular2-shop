import {Pipe} from 'angular2/core';
import Product from "../entities/Product";

@Pipe({
    name: 'productFilter'
})
export default class ProductFilterPipe {
    public transform (items, [filterText]) {
        return items.filter(this.filterProducts.bind(null, filterText));
    }

    private filterProducts (filterText: string, product: Product) {
        if(!filterText.length) {
            return true;
        } else {
            return product.toString().toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase()) != -1;
        }
    };
}
