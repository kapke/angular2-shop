import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {RoutableProductComponent, ProductListWithSearchingComponent} from "../../product/product";

@Component({
    selector: 's-products',
    directives: [ROUTER_DIRECTIVES],
    template: '<router-outlet></router-outlet>'
})
@RouteConfig([
    {path: '/', name: 'ProductList', component: ProductListWithSearchingComponent, useAsDefault: true},
    // We change that route into component which knows how to use router
    {path: '/:slug', name: 'Product', component: RoutableProductComponent}
])
export default class ProductsComponent {
}
