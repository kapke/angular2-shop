import {Component, View, Inject} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import OrderFormComponent from '../OrderForm/OrderFormComponent';
import ProductsComponent from "../Products/ProductsComponent";
import TopMenuComponent from "../TopMenu/TopMenuComponent";

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES, TopMenuComponent],
    templateUrl: 'src/components/App/my-app.html'
})
//4/ But we need to use ellipsis (...) to mark that ProductsComponent has it's own routing
@RouteConfig([
    {path: '/products/...', name: 'Products', component: ProductsComponent, useAsDefault: true},
    {path: '/order-form', name: 'OrderForm', component: OrderFormComponent}
])
export default class App {
    public title: string = 'Shop';
    public menuItems = [
        {link: 'Products', title: 'Products'},
        {link: 'OrderForm', title: 'Order Form'}
    ]
}
