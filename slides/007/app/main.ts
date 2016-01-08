import {Product} from './Product';
import {PromotedProductListComponent, ProductListComponent} from "./ProductListComponent";

const promotedProducts : Product[] = [
    {name: 'Latte', price: '$10'},
    {name: 'Green Tea', price: '$7'}
];

const products : Product[] = [
    {name: 'Coffee', price: '$5'},
    {name: 'Tea', price: '$4'},
    {name: 'Yerba', price: '$6'}
];

const promotedProductsList = new PromotedProductListComponent(promotedProducts);
document.body.appendChild(promotedProductsList.domElement);

const productList = new ProductListComponent(products);
document.body.appendChild(productList.domElement);
