import {OpaqueToken} from "@angular/core";

import {ProductListComponent} from "./products/ProductListComponent";
import {PromotedProductListComponent} from "./products/PromotedProductListComponent";
import {TagsComponent} from "./products/TagsComponent";
import {ProductSortPipe} from "./products/ProductSortPipe";
import {ProductFilterPipe} from "./products/ProductFilterPipe";
import {HttpProductRepository} from "./products/HttpProductRepository";


export {Product} from './products/Product';
export {ProductRepository} from './products/ProductRepository';
export const ProductRepositoryToken = new OpaqueToken('ProductRepository');
export const PRODUCT_DIRECTIVES = [ProductListComponent, PromotedProductListComponent, TagsComponent];
export const PRODUCT_PROVIDERS = [ProductSortPipe, ProductFilterPipe, {provide: ProductRepositoryToken, useClass: HttpProductRepository}];