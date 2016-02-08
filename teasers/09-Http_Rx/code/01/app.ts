import {bootstrap} from 'angular2/bootstrap';
import {Component} from 'angular2/core';
import {COMMON_DIRECTIVES, FORM_PROVIDERS} from "angular2/common";
import {HTTP_PROVIDERS, Http} from 'angular2/http';
import {Todo} from "./../../../10-Routing/code/01/Todo";

import "rxjs/add/operator/map";

@Component({
    selector: 'my-app',
    directives: [Todo],
    template: `
        <div>
            <my-todo *ngFor="#todo of todos" [todo]="todo"></my-todo>
        </div>
    `
})
class App {
    public todos: Array<Object> = [];

    constructor (http: Http) {
        http.get('todos.json')
            .map(res => res.json())
            .subscribe((todos) => this.todos = todos);
    }
}

bootstrap(App, [HTTP_PROVIDERS]);
