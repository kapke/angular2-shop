import { Component } from '@angular/core';
import { ControlGroup, FormBuilder } from "@angular/forms";

@Component({
    selector: 'my-app',
    //11/ 3. Wiring form model with template is done using `formGroup` and `formControlName`
    template: `
        <div>
            <form [formGroup]="todoForm">
                <label>
                    Title: <input type="text" [formControlName]="'title'" />
                </label>
                <button (click)="addTodo()">Add</button>
            </form>
            <my-todo *ngFor="let todo of todos" [todo]="todo"></my-todo>
        </div>
    `
})
export class AppComponent {
    public todos: Array<Object> = [];
    // 1. Form is group of controls
    public todoForm: ControlGroup;

    //5/ 2. So we build it in constructor
    constructor (fb: FormBuilder) {
        this.todoForm = fb.group({
            title: ['']
        });
    }

    addTodo () {
        this.todos.push({title: this.todoForm.value.title, done: false});
    }
}