import {Component, View} from 'angular2/core';
import ProductList from '../ProductList/ProductList';

@Component({
    selector: 'my-app',
    directives: [ProductList],
    templateUrl: 'src/components/App/my-app.html'
})
export default class App {
    public title:string = 'Shop';
    public products = [
        {name: 'Coffee', price: '$5'},
        {name: 'Tea', price: '$4'},
        {name: 'Yerba', price: '$4'}
    ];
}
