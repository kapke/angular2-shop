import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {TodoComponent} from "./todo.component";

@NgModule({
    //We need to declare HttpModule as a dependency
    imports: [BrowserModule, HttpModule],
    declarations: [AppComponent, TodoComponent],
    bootstrap: [AppComponent]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
