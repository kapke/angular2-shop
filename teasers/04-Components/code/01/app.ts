import {bootstrap} from 'angular2/bootstrap';
import {Component} from 'angular2/core';
import {Todo} from "./Todo";

@Component({
    selector: 'my-app',
    directives: [Todo],
    //3/ To pass data we use square brackets
    template: `
        <my-todo *ngFor="#todo of todos" [todo]="todo"></my-todo>
    `
})
class App {
    public todos: Array<Object> = [
        {title: 'my first todo', done: false},
        {title: 'my second todo', done: true}
    ];
}

bootstrap(App);
