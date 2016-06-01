import {provide} from "@angular/core";

import Product from './entities/Product';
import ProductRepository from './repositories/ProductRepository';
import StaticJsonProductRepository from './repositories/StaticJsonProductRepository';
import InMemoryProductRepository from './repositories/InMemoryProductRepository';
import ProductComponent from './components/ProductComponent';
import ProductListComponent from './components/ProductListComponent';
import PromotedProductListComponent from './components/PromotedProductListComponent';
import ProductFilterPipe from './pipes/ProductFilterPipe';
import ProductSortPipe from './pipes/ProductSortPipe';

const PRODUCT_PIPES = [ProductFilterPipe, ProductSortPipe];
const PRODUCT_DIRECTIVES = [ProductComponent, ProductListComponent, PromotedProductListComponent];
const PRODUCT_PROVIDERS = [
    // Usage of `provide` function makes abstraction working properly
    provide(ProductRepository, {useClass: StaticJsonProductRepository}),
    StaticJsonProductRepository,
    InMemoryProductRepository];

export {Product, ProductRepository, StaticJsonProductRepository, InMemoryProductRepository,
        ProductComponent, ProductListComponent, PromotedProductListComponent,
        ProductFilterPipe, ProductSortPipe,
        PRODUCT_DIRECTIVES, PRODUCT_PIPES, PRODUCT_PROVIDERS};
