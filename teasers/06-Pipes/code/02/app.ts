import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent, TomorrowPipe} from './app.component';

@NgModule({
    imports: [BrowserModule],
    //To be able to use our pipe in components we need to declare it in module
    declarations: [AppComponent, TomorrowPipe],
    bootstrap: [AppComponent]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
