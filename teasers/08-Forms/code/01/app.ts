import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo.component';

@NgModule({
    //To use forms in that way we need to add ReactiveFormsModule as a dependency
    imports: [BrowserModule, ReactiveFormsModule],
    declarations: [AppComponent, TodoComponent],
    bootstrap: [AppComponent]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
