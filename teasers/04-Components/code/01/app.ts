import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';
import {Todo} from "./Todo";

@Component({
    selector: 'my-app',
    directives: [Todo],
    //3/ To pass data we use square brackets
    template: `
        <my-todo *ngFor="let todo of todos" [todo]="todo"></my-todo>
    `
})
class App {
    public todos: Array<Object> = [
        {title: 'my first todo', done: false},
        {title: 'my second todo', done: true}
    ];
}

bootstrap(App);
