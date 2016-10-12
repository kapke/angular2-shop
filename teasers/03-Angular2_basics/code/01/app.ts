import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//6/ 2. But we need to remember that we need to mark this class as component and describe it
@Component({
    selector: 'my-app',
    template: `<div>{{ title }}</div>`
})
//3/ 1. A component is simple class holding data and methods wired with template
class AppComponent {
    public title: string = 'Hello, world!'
}

//5/ 3. Then we can create a module with our AppComponent
@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
class AppModule {}

// 4. To start application we need to provide main application module as an argument
platformBrowserDynamic().bootstrapModule(AppModule);
