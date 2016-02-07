import {bootstrap} from 'angular2/bootstrap';
import {Component, Pipe, Injectable} from 'angular2/core';
import {COMMON_DIRECTIVES} from "angular2/common";
import {Todo} from "./Todo";

@Injectable()
class TodoRepository {
    public getTodos (): Object[] {
        return [
            {title: 'my first todo', done: false},
            {title: 'my second todo', done: true}
        ];
    }
}


@Component({
    selector: 'my-app',
    directives: [Todo],
    template: `
        <my-todo *ngFor="#todo of todos" [todo]="todo"></my-todo>
    `
})
class App {
    public todos: Array<Object> = [];

    constructor (todoRepository: TodoRepository) {
        this.todos = todoRepository.getTodos();
    }
}

bootstrap(App, [TodoRepository]);
