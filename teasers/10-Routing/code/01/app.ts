import {bootstrap} from 'angular2/bootstrap';
import {Component} from 'angular2/core';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig} from "angular2/router";

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
@RouteConfig([
    {path: '/a', as: 'A', component: AComponent, useAsDefault: true},
    {path: '/b', as: 'B', component: BComponent}
])
class App {}

bootstrap(App, [ROUTER_PROVIDERS]);
