import {Component, View, Inject} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import OrderFormComponent from '../OrderForm/OrderFormComponent';
import ProductsComponent from "../Products/ProductsComponent";

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'dist/components/App/my-app.html'
})
@RouteConfig([
    {path: '/products', name: 'Products', component: ProductsComponent, useAsDefault: true},
    {path: '/order', name: 'Order', component: OrderFormComponent}
])
export default class App {
    public title: string = 'Shop';
}
