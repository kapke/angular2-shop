import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component, Pipe, Injectable} from '@angular/core';
import {COMMON_DIRECTIVES, FORM_PROVIDERS, FormBuilder, ControlGroup, FORM_DIRECTIVES} from "@angular/common";
import {Todo} from "./Todo";

@Component({
    selector: 'my-app',
    // 4. We will make use of several form-connected directives in template
    directives: [Todo, FORM_DIRECTIVES],
    //11/ 5. Wiring form model with template is done using `ngFormModel` and `ngControl`
    template: `
        <div>
            <form [ngFormModel]="todoForm">
                <label>
                    Title: <input type="text" [ngControl]="'title'" />
                </label>
                <button [disabled]="!todoForm.valid" (click)="addTodo()">Add</button>
            </form>
            <my-todo *ngFor="let todo of todos" [todo]="todo"></my-todo>
        </div>
    `
})
class App {
    public todos: Array<Object> = [];
    // 3. Form is group of controls
    public todoForm: ControlGroup;

    //5/ 2. Then we will build our form model
    constructor (fb: FormBuilder) {
        this.todoForm = fb.group({
            title: fb.control('')
        });
    }

    addTodo () {
        this.todos.push({title: this.todoForm.value.title, done: false});
    }
}

// 1. First of all - we need to use FORM_PROVIDERS
bootstrap(App, [FORM_PROVIDERS]);
