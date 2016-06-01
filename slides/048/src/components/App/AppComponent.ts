import {Component, View, Inject} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import OrderFormComponent from '../OrderForm/OrderFormComponent';
import ProductsComponent from "../Products/ProductsComponent";

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'src/components/App/my-app.html'
})
//4/ To configure router we provide @RouteConfig annotation on component
@RouteConfig([
    {path: '/products', name: 'Products', component: ProductsComponent, useAsDefault: true},
    {path: '/order', name: 'Order', component: OrderFormComponent}
])
export default class App {
    public title: string = 'Shop';
}
