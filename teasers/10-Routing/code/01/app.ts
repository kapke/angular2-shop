import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig} from "@angular/router-deprecated";

//11/ 2. Then we will create 2 dumb components
@Component({
    selector: 'a-comp',
    template: `<div>Komponent A</div>`
})
class AComponent {}

@Component({
    selector: 'b-comp',
    template: `<div>Komponent B</div>`
})
class BComponent {}

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    //6/ 4. To create a link we use `routerLink` directive
    template: `
        <div>
            <nav>
                <a [routerLink]="['A']">A</a>
                <a [routerLink]="['B']">B</a>
            </nav>
            <router-outlet></router-outlet>
        </div>
    `
})
//5/ 3. Routing configuration is, as almost everything in Angular2 - an annotation on component
@RouteConfig([
    {path: '/a', as: 'A', component: AComponent, useAsDefault: true},
    {path: '/b', as: 'B', component: BComponent}
])
class App {}

// 1. We will start with adding providers
bootstrap(App, [ROUTER_PROVIDERS]);
