import * as _ from "lodash";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";

import {Product} from "./Product";
import {SortingDescriptor} from "../SortingDescriptor";
import {ProductFilterPipe} from "./ProductFilterPipe";
import {ProductSortPipe} from "./ProductSortPipe";
import {ProductRepository} from "./ProductRepository";
import {AbstractProductRepository} from "./AbstractProductRepository";


@Injectable()
export class InMemoryProductRepository extends AbstractProductRepository implements ProductRepository {
    constructor(productFilterPipe: ProductFilterPipe, productSortPipe: ProductSortPipe) {
        super(productFilterPipe, productSortPipe);
    }

    private get promotedProducts () : Product[] {
        return [
            new Product('1', 'Dell XPS 13', 1500, ['super', 'new']),
            new Product('2', 'Dell XPS 15', 1750, ['new', 'efficient']),
            new Product('3', 'Lenovo Thinkpad X260', 180, ['carbon'])
        ];
    }

    private get products () : Product[] {
        return [
            new Product('4', 'Lenovo Thinkpad T460', 1000, ['solid']),
            new Product('5', 'Lenovo Thinkpad T460p', 1200, ['solid', 'efficient']),
            new Product('6', 'Lenovo Thinkpad T460s', 1300, ['lightweight']),
            new Product('7', 'Lenovo Thinkpad T560', 1050),
            new Product('9', 'Lenovo Thinkpad T560p', 1250),
            new Product('10', 'Lenovo Thinkpad T560s', 1350),
            new Product('11', 'Dell Latitude e5470', 950, ['efficient']),
            new Product('12', 'Dell Latitude e5570', 1150),
            new Product('13', 'Dell Latitude e5770', 1250),
            new Product('14', 'Dell Latitude e3470', 750),
            new Product('15', 'Dell Latitude e3570', 850),
            new Product('16', 'Dell Latitude e3770', 90)
        ];
    }

    public findAdvertisedProducts (filterText: string, sortingDescriptor: SortingDescriptor): Observable<Product[]> {
        return Observable.from([[]]);
    }

    public findPromotedProducts (filterText: string, sortingDescriptor: SortingDescriptor): Observable<Product[]> {
        return Observable.from([this.applyFilterAndSorting(this.promotedProducts, filterText, sortingDescriptor)]);
    }

    public findProducts (filterText: string, sortingDescriptor: SortingDescriptor): Observable<Product[]> {
        return Observable.from([this.applyFilterAndSorting(this.products, filterText, sortingDescriptor)]);
    }

    protected getRawProducts(): Observable<Product[]> {
        return Observable.from([this.products]);
    }

    protected getRawPromotedProducts(): Observable<Product[]> {
        return Observable.from([this.promotedProducts]);
    }
}