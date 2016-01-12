import Product from './entities/Product';
import ProductRepository from './repositories/ProductRepository';
import ProductComponent from './components/ProductComponent';
import ProductListComponent from './components/ProductListComponent';
import PromotedProductListComponent from './components/PromotedProductListComponent';
import ProductFilterPipe from './pipes/ProductFilterPipe';
import ProductSortPipe from './pipes/ProductSortPipe';

const PRODUCT_PIPES = [ProductFilterPipe, ProductSortPipe];
const PRODUCT_DIRECTIVES = [ProductComponent, ProductListComponent, PromotedProductListComponent];

export {Product, ProductRepository,
        ProductComponent, ProductListComponent, PromotedProductListComponent,
        ProductFilterPipe, ProductSortPipe,
        PRODUCT_DIRECTIVES, PRODUCT_PIPES};
