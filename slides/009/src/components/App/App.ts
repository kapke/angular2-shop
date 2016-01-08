import {Component, View} from 'angular2/core';
import ProductList from '../ProductList/ProductList';

@Component({
    selector: 'my-app',
    directives: [ProductList],
    templateUrl: 'dist/components/App/my-app.html'
})
export default class App {
    public title:string = 'Shop';
}
