import Product from './entities/Product';
import ProductComponent from './components/ProductComponent';
import ProductFilterPipe from './pipes/ProductFilterPipe';
import ProductListComponent from './components/ProductListComponent';
import ProductSortPipe from './pipes/ProductSortPipe';
import PromotedProductListComponent from './components/PromotedProductListComponent';

const PRODUCT_PIPES = [ProductFilterPipe, ProductSortPipe];
const PRODUCT_DIRECTIVES = [ProductComponent, ProductListComponent, PromotedProductListComponent];

export {Product, ProductComponent, ProductFilterPipe, ProductListComponent, ProductSortPipe, PromotedProductListComponent, PRODUCT_DIRECTIVES, PRODUCT_PIPES};
