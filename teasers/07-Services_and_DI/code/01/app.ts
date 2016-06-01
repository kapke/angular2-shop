import {bootstrap} from "@angular/platform-browser-dynamic";
import {Component, Injectable} from "@angular/core";
import {COMMON_DIRECTIVES} from "@angular/common";
import {Todo} from "./Todo";

//As using decorator is the only way to force TypeScript to emit metadata, Angular2 has special decorator for services
@Injectable()
//8/ When ignoring decorator service is simple class with no dependencies from Angular2
export class TodoRepository {
    public getTodos (): Object[] {
        return [
            {title: 'my first todo', done: false},
            {title: 'my second todo', done: true}
        ];
    }
}

@Component({
    selector: 'my-app',
    directives: [Todo, COMMON_DIRECTIVES],
    template: `
        <my-todo *ngFor="let todo of todos" [todo]="todo"></my-todo>
    `
})
export class App {
    public todos: Array<Object> = [];

    //To inject service we use type hinting
    constructor (todoRepository: TodoRepository) {
        this.todos = todoRepository.getTodos();
    }
}

//But we also need to add all services here to make them available
bootstrap(App, [TodoRepository]);
