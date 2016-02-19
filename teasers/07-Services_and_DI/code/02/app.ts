import {bootstrap} from 'angular2/bootstrap';
import {Component, Pipe, Inject, provide} from 'angular2/core';
import {COMMON_DIRECTIVES} from "angular2/common";
import {Todo as TodoComponent} from "./Todo";
import {TodoRepository, InMemoryTodoRepository, Todo} from './TodoRepository';

@Component({
    selector: 'my-app',
    directives: [TodoComponent],
    template: `
        <my-todo *ngFor="#todo of todos" [todo]="todo"></my-todo>
    `
})
class App {
    public todos: Todo[] = [];

    // 2. But then we need to use @Inject() decorator on constructor argument
    constructor (@Inject('TodoRepository') todoRepository: TodoRepository) {
        this.todos = todoRepository.getTodos();
    }
}

// 1. For configuration values, interface typings, etc. we can use provide function
bootstrap(App, [provide('TodoRepository', {useClass: InMemoryTodoRepository})]);
