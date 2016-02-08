import {bootstrap} from 'angular2/bootstrap';
import {Component} from 'angular2/core';
import {COMMON_DIRECTIVES, FORM_PROVIDERS} from "angular2/common";
import {HTTP_PROVIDERS, Http} from 'angular2/http';
import {Todo} from "./../../../10-Routing/code/02/Todo";

import "rxjs/add/operator/map";
import "rxjs/add/operator/retry";

@Component({
    selector: 'my-app',
    directives: [Todo],
    template: `
        <div>
            <my-todo *ngFor="#todo of todos" [todo]="todo"></my-todo>
            <div *ngFor="#msg of messages">{{ msg }}</div>
        </div>
    `
})
class App {
    public todos: Object[] = [];
    public messages: string[] = [];

    constructor (http: Http) {
        http.get('todosaaaa.json')
            .retry(5)
            .map(res => res.json())
            .subscribe(
                (todos) => this.todos = todos,
                (err) => this.messages.push(err.text()),
                () => this.messages.push('complete')
            );
    }
}

bootstrap(App, [HTTP_PROVIDERS]);
