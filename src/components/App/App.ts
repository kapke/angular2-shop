import {Component, View} from 'angular2/core';
import ProductListComponent from '../ProductList/ProductList';
import {Product} from "../../entities/Product";

@Component({
    selector: 'my-app',
    directives: [ProductListComponent],
    templateUrl: 'dist/components/App/my-app.html'
})
export default class App {
    public title:string = 'Shop';
    public products : Product[] = [
        {name: 'Coffee', price: '$5'},
        {name: 'Tea', price: '$4'},
        {name: 'Yerba', price: '$4'}
    ];
}
