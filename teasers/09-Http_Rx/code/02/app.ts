import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';
import {COMMON_DIRECTIVES, FORM_PROVIDERS} from "@angular/common";
import {HTTP_PROVIDERS, Http} from '@angular/http';
import {Todo} from "./Todo";

import "rxjs/add/operator/map";
import "rxjs/add/operator/retry";

@Component({
    selector: 'my-app',
    directives: [Todo],
    template: `
        <div>
            <my-todo *ngFor="#todo of todos" [todo]="todo"></my-todo>
            <div *ngFor="let msg of messages">{{ msg }}</div>
        </div>
    `
})
class App {
    public todos: Object[] = [];
    public messages: string[] = [];

    constructor (http: Http) {
        //2/ If request fails - we can use `retry` operator
        http.get('todosaaaa.json')
            .retry(5)
            .map(res => res.json())
            //5/ There are 3 types of action we can subscribe to: next item, error, done
            .subscribe(
                (todos) => this.todos = todos,
                (err) => this.messages.push(err.text()),
                () => this.messages.push('complete')
            );
    }
}

bootstrap(App, [HTTP_PROVIDERS]);
