import {Component, Inject} from '@angular/core';
import {TodoRepository, TodoRepositoryToken, Todo} from './TodoRepository';

@Component({
    selector: 'my-app',
    template: `
        <my-todo *ngFor="let todo of todos" [todo]="todo"></my-todo>
    `
})
export class AppComponent {
    public todos: Todo[] = [];

    // 2. But then we need to use @Inject() decorator on constructor argument
    constructor (@Inject(TodoRepositoryToken) todoRepository: TodoRepository) {
        this.todos = todoRepository.getTodos();
    }
}