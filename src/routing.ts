import {Routes, RouterModule} from '@angular/router';
import {ProductsComponent} from "./products/ProductsComponent";
import {OrderFormComponent} from "./OrderFormComponent";
import {MenuItem} from "./menu";


const appRoutes: Routes = [
    {path: 'products', component: ProductsComponent},
    {path: 'order-form', component: OrderFormComponent},
    {path: '**', redirectTo: 'products'}
];

const S_MENU_ITEMS: MenuItem[] = [
    {title: 'Products', link: '/products'},
    {title: 'Order form', link: '/order-form'}
];


export const appRoutingProviders: any[] = [
    {provide: 'S_MENU_ITEMS', useValue: S_MENU_ITEMS}
];

export const routing = RouterModule.forRoot(appRoutes);