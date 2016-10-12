import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo.component';
import { InMemoryTodoRepository, TodoRepositoryToken } from "./TodoRepository";

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, TodoComponent],
    //Using this syntax we can register different types of providers
    providers: [{provide: TodoRepositoryToken, useClass: InMemoryTodoRepository}],
    bootstrap: [AppComponent]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
