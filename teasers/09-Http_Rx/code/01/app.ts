import {bootstrap} from 'angular2/bootstrap';
import {Component} from 'angular2/core';
import {COMMON_DIRECTIVES, FORM_PROVIDERS} from "angular2/common";
import {HTTP_PROVIDERS, Http} from 'angular2/http';
import {Todo} from "./Todo";

// 4. Depending on configuration we will need to import every Rx.js operator to use it
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

    // 2. The we inject http
    constructor (http: Http) {
        //3/ 3. And we can use it to fetch data
        http.get('todos.json')
            .map(res => res.json())
            .subscribe((todos) => this.todos = todos);
    }
}

// 1. Of course we need to declare that we will be using HTTP module
bootstrap(App, [HTTP_PROVIDERS]);
