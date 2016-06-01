import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component, Pipe, Injectable} from '@angular/core';
import {COMMON_DIRECTIVES, FORM_PROVIDERS, FormBuilder, ControlGroup, Validators} from "@angular/common";
import {Todo} from "./Todo";
import {Validator} from "@angular/common";

@Component({
    selector: 'my-app',
    directives: [Todo],
    //7/ 2. We need to remember to check form state before submitting it
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
    public todoForm: ControlGroup;

    constructor (fb: FormBuilder) {
        this.todoForm = fb.group({
            // 1. Validation can be done using simple function passed as second argument. There are several built-in Angular
            title: fb.control('', Validators.required)
        });
    }

    addTodo () {
        this.todos.push({title: this.todoForm.value.title, done: false});
    }
}

bootstrap(App, [FORM_PROVIDERS]);
