import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ProductComponent, ProductListWithSearchingComponent} from "../../product/product";

@Component({
    selector: 's-products',
    directives: [ROUTER_DIRECTIVES],
    template: '<router-outlet></router-outlet>'
})
//4/ As AppComponent shouldn't be aware of routing of products, we add it here
@RouteConfig([
    {path: '/', name: 'ProductList', component: ProductListWithSearchingComponent, useAsDefault: true},
    {path: '/:slug', name: 'Product', component: ProductComponent}
])
export default class ProductsComponent {
}
