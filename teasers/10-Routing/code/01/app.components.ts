import {Component} from '@angular/core';

//11/ 1. We create 2 dumb components
@Component({
    selector: 'a-comp',
    template: `<div>Component A</div>`
})
export class AComponent {}

@Component({
    selector: 'b-comp',
    template: `<div>Component B</div>`
})
export class BComponent {}

@Component({
    selector: 'my-app',
    //6/ 2. To create a link we use `routerLink` directive, `routerOutlet` is a slot for routed component
    template: `
        <div>
            <nav>
                <a routerLink="/a">A</a>
                <a routerLink="/b">B</a>
                <a routerLink="/c">C</a>
            </nav>
            <router-outlet></router-outlet>
        </div>
    `
})
export class AppComponent {}
