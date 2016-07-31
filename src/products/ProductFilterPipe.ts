import {PipeTransform, Pipe} from "@angular/core";
import {Product} from "./Product";

@Pipe({
    name: 'sProductFilter'
})
export class ProductFilterPipe implements PipeTransform {
    transform(products: Product[], filterText: string):Product[] {
        return products.filter((product) => {
            const productString = product.toString().toLocaleLowerCase();

            return productString.includes(filterText.toLocaleLowerCase())
        });
    }
}