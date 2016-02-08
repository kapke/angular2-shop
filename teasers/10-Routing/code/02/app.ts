import {bootstrap} from 'angular2/bootstrap';
import {Component} from 'angular2/core';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig} from "angular2/router";
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
@RouteConfig([
    {path: '/:id', as: 'Todo', component: Todo}
])
class TodosComp {}

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
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
    {path: '/todos/...', as: 'Todos', component: TodosComp}
])
class App {}

bootstrap(App, [ROUTER_PROVIDERS]);
