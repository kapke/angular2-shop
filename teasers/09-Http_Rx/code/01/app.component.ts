import { Component } from '@angular/core';
import { Http } from '@angular/http';

// 3. Depending on configuration we will need to import every Rx.js operator to use it
import "rxjs/add/operator/map";

@Component({
    selector: 'my-app',
    template: `
        <div>
            <my-todo *ngFor="let todo of todos" [todo]="todo"></my-todo>
        </div>
    `
})
export class AppComponent {
    public todos: Array<Object> = [];

    // 1. We inject http service
    constructor (http: Http) {
        //3/ 2. And we can use it to fetch data
        http.get('todos.json')
            .map(res => res.json())
            .subscribe((todos) => this.todos = todos);
    }
}