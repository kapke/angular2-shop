import { Component } from '@angular/core';
import { Http } from '@angular/http';

import "rxjs/add/operator/map";
import "rxjs/add/operator/retry";

@Component({
    selector: 'my-app',
    template: `
        <div>
            <my-todo *ngFor="let todo of todos" [todo]="todo"></my-todo>
            <div *ngFor="let msg of messages">{{ msg }}</div>
        </div>
    `
})
export class AppComponent {
    public todos: Object[] = [];
    public messages: string[] = [];

    constructor (http: Http) {
        //2/ If request fails - we can use `retry` operator
        http.get('todos-foo.json')
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