import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.components';
import { EmptyComponent } from "./empty.component";
import { TodoComponent } from './todo.component';

//5/ We declare parametrized route
const appRoutes: Routes = [
    {path: 'todos/:index', component: TodoComponent},
    {path: '', component: EmptyComponent},
    {path: '**', component: EmptyComponent}
];

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, TodoComponent, EmptyComponent],
    bootstrap: [AppComponent]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
