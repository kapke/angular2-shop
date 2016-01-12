import Product from './entities/Product';
import ProductRepository from './repositories/ProductRepository';
import StaticJsonProductRepository from './repositories/StaticJsonProductRepository';
import ProductComponent from './components/ProductComponent';
import ProductListComponent from './components/ProductListComponent';
import PromotedProductListComponent from './components/PromotedProductListComponent';
import ProductFilterPipe from './pipes/ProductFilterPipe';
import ProductSortPipe from './pipes/ProductSortPipe';

const PRODUCT_PIPES = [ProductFilterPipe, ProductSortPipe];
const PRODUCT_DIRECTIVES = [ProductComponent, ProductListComponent, PromotedProductListComponent];
const PRODUCT_PROVIDERS = [ProductRepository, StaticJsonProductRepository];

export {Product, ProductRepository, StaticJsonProductRepository,
        ProductComponent, ProductListComponent, PromotedProductListComponent,
        ProductFilterPipe, ProductSortPipe,
        PRODUCT_DIRECTIVES, PRODUCT_PIPES, PRODUCT_PROVIDERS};
