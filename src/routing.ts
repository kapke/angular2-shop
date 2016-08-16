import {Routes, RouterModule} from '@angular/router';
import {ProductsComponent} from "./products/ProductsComponent";
import {OrderFormComponent} from "./OrderFormComponent";


const appRoutes: Routes = [
    {path: 'products', component: ProductsComponent},
    {path: 'order-form', component: OrderFormComponent},
    {path: '**', redirectTo: 'products'}
]

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes);