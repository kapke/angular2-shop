import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent, SuperDirective} from './app.component';


@NgModule({
    imports: [BrowserModule],
    //We declare directives in module in exactly the same way as components
    declarations: [AppComponent, SuperDirective],
    bootstrap: [AppComponent]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
