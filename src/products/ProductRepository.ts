import {Observable} from "rxjs/Rx";

import {Product} from "./Product";
import {SortingDescriptor} from "../SortingDescriptor";


interface ProductRepository {
    findPromotedProducts (filterText:string, sortingDescriptor:SortingDescriptor) : Observable<Product[]>;
    findAdvertisedProducts (filterText:string, sortingDescriptor:SortingDescriptor) : Observable<Product[]>;
    findProducts (filterText:string, sortingDescriptor:SortingDescriptor) : Observable<Product[]>;
    findProductById (id: string) : Observable<Product>;
}

export {ProductRepository};