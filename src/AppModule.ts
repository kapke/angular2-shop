import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";

import {routing, appRoutingProviders} from "./routing";
import {AppComponent} from "./AppComponent";
import {OrderFormComponent} from "./OrderFormComponent";
import {ProductsComponent} from "./products/ProductsComponent";
import {SingleProductComponent} from "./products/SingleProductComponent";
import {PRODUCT_PROVIDERS} from "./products";

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, RouterModule, routing],
    declarations: [AppComponent, OrderFormComponent, ProductsComponent, SingleProductComponent],
    providers: [appRoutingProviders, PRODUCT_PROVIDERS],
    bootstrap: [AppComponent]
})
export class AppModule {}