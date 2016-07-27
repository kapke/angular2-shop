import * as _ from "lodash";
import {Injectable} from "@angular/core";

import {Product} from "./Product";
import {SortingDescriptor} from "./SortingDescriptor";
import {ProductFilterPipe} from "./ProductFilterPipe";
import {ProductSortPipe} from "./ProductSortPipe";


@Injectable()
export class InMemoryProductRepository {
    constructor(private productFilterPipe: ProductFilterPipe, private productSortPipe: ProductSortPipe) {}

    public findPromotedProducts (filterText: string, sortingDescriptor: SortingDescriptor): Product[] {
        return this.applyFilterAndSorting([
                new Product('Dell XPS 13', 1500, ['super', 'new']),
                new Product('Dell XPS 15', 1750, ['new', 'efficient']),
                new Product('Lenovo Thinkpad X260', 180, ['carbon'])
            ], filterText, sortingDescriptor);
    }

    public findProducts (filterText: string, sortingDescriptor: SortingDescriptor): Product[] {
        return this.applyFilterAndSorting([
            new Product('Lenovo Thinkpad T460', 1000, ['solid']),
            new Product('Lenovo Thinkpad T460p', 1200, ['solid', 'efficient']),
            new Product('Lenovo Thinkpad T460s', 1300, ['lightweight']),
            new Product('Lenovo Thinkpad T560', 1050),
            new Product('Lenovo Thinkpad T560p', 1250),
            new Product('Lenovo Thinkpad T560s', 1350),
            new Product('Dell Latitude e5470', 950, ['efficient']),
            new Product('Dell Latitude e5570', 1150),
            new Product('Dell Latitude e5770', 1250),
            new Product('Dell Latitude e3470', 750),
            new Product('Dell Latitude e3570', 850),
            new Product('Dell Latitude e3770', 90)
        ], filterText, sortingDescriptor);
    }

    private applyFilterAndSorting (products: Product[], filterText: string, sortingDescriptor: SortingDescriptor) {
        return _.chain(products)
            .thru((products) => this.productFilterPipe.transform(products, filterText))
            .thru((products) => this.productSortPipe.transform(products, sortingDescriptor))
            .value();
    }
}