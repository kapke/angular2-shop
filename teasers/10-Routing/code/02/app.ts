import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig} from "@angular/router-deprecated";
import {Todo} from "./Todo";

@Component({
    selector: 'a-comp',
    template: `<div>Możesz kliknąć w menu</div>`
})
class InfoComponent {}

@Component({
    selector: 'todos-comp',
    directives: [ROUTER_DIRECTIVES],
    template: `<router-outlet></router-outlet>`
})
//4/ 2. Then we can use that component for routing children
@RouteConfig([
    {path: '/:id', as: 'Todo', component: Todo}
])
class TodosComp {}

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    //5/ 3. Passing array as argument for routerLink simplifies link building and passing params
    template: `
        <div>
            <nav>
                <a [routerLink]="['Info']">Info</a>
                <a [routerLink]="['Todos', 'Todo', {'id': 15}]">Some Todo</a>
            </nav>
            <router-outlet></router-outlet>
        </div>
    `
})
@RouteConfig([
    {path: '/info', as: 'Info', component: InfoComponent, useAsDefault: true},
    // 1. To nest routes we need mark it on route in parent component and mount here component with defined routing
    {path: '/todos/...', as: 'Todos', component: TodosComp}
])
class App {}

bootstrap(App, [ROUTER_PROVIDERS]);
