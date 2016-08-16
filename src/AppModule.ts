import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";

import {routing, appRoutingProviders} from "./routing";
import {AppComponent} from "./AppComponent";
import {OrderFormComponent} from "./OrderFormComponent";
import {ProductsComponent} from "./products/ProductsComponent";


@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, routing],
    declarations: [AppComponent, OrderFormComponent, ProductsComponent],
    providers: [appRoutingProviders],
    bootstrap: [AppComponent]
})
export class AppModule {}