import {Observable} from "rxjs/Rx";
import {OpaqueToken} from "@angular/core";

import {Product} from "./Product";
import {SortingDescriptor} from "./SortingDescriptor";


const ProductRepositoryToken = new OpaqueToken('ProductRepository');
interface ProductRepository {
    findPromotedProducts (filterText:string, sortingDescriptor:SortingDescriptor) : Observable<Product[]>;
    findAdvertisedProducts (filterText:string, sortingDescriptor:SortingDescriptor) : Observable<Product[]>;
    findProducts (filterText:string, sortingDescriptor:SortingDescriptor) : Observable<Product[]>;
}

export {ProductRepository, ProductRepositoryToken};