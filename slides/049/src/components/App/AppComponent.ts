import {Component, View, Inject} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import OrderFormComponent from '../OrderForm/OrderFormComponent';
import ProductsComponent from "../Products/ProductsComponent";
import TopMenuComponent from "../TopMenu/TopMenuComponent";

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES, TopMenuComponent],
    templateUrl: 'dist/components/App/my-app.html'
})
@RouteConfig([
    {path: '/products', name: 'Products', component: ProductsComponent, useAsDefault: true},
    {path: '/order-form', name: 'OrderForm', component: OrderFormComponent}
])
export default class App {
    public title: string = 'Shop';
}
