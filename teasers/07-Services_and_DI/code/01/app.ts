import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent, TodoRepository } from './app.component';
import { TodoComponent } from './todo.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, TodoComponent],
    //To make instance of service injectable we need to add class to providers
    providers: [TodoRepository],
    bootstrap: [AppComponent]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
