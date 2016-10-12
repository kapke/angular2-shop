import { Component } from '@angular/core';
import { Validators, ControlGroup, FormBuilder } from "@angular/forms";

@Component({
    selector: 'my-app',
    //7/ 2. We need to remember to check form state before submitting it
    template: `
        <div>
            <form [formGroup]="todoForm">
                <label>
                    Title: <input type="text" [formControlName]="'title'" />
                </label>
                <button [disabled]="!todoForm.valid" (click)="addTodo()">Add</button>
            </form>
            <my-todo *ngFor="let todo of todos" [todo]="todo"></my-todo>
        </div>
    `
})
export class AppComponent {
    public todos: Array<Object> = [];
    public todoForm: ControlGroup;

    constructor (fb: FormBuilder) {
        this.todoForm = fb.group({
            // 1. Validation can be done using simple function passed as second argument. There are several built-in Angular
            title: ['', Validators.required]
        });
    }

    addTodo () {
        this.todos.push({title: this.todoForm.value.title, done: false});
    }
}