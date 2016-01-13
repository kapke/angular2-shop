import {Component, View} from 'angular2/core';
import ProductListComponent from '../ProductList/ProductList';
import PromotedProductListComponent from '../ProductList/PromotedProductList';
import Product from "../../entities/Product";

@Component({
    selector: 'my-app',
    directives: [ProductListComponent, PromotedProductListComponent],
    templateUrl: 'src/components/App/my-app.html'
})
export default class App {
    public title:string = 'Shop';
    public products : Product[] = [
        new Product('Coffee', '$5'),
        new Product('Tea', '$4', ['Great', 'Super']),
        new Product('Yerba', '$4', ['Strong'])
    ];
    public promotedProducts : Product[] = [
        new Product('Latte', '$10'),
        new Product('Green Tea', '$7')
    ];

}
