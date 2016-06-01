import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';

//6/ 3. But we need to remember that we need to mark this class as component and describe it
@Component({
    selector: 'my-app',
    template: `
        <div>{{ title }}</div>
    `
})
//3/ 2. A component is simple class holding data and methods wired with template
class App {
    public title: string = 'Hello, world!'
}

// 1. To start application we need to call `bootstrap` function with main component as argument
bootstrap(App);
