import {bootstrap} from 'angular2/bootstrap';
import {Component, Pipe, Injectable} from 'angular2/core';
import {COMMON_DIRECTIVES, FORM_PROVIDERS, FormBuilder, ControlGroup, Validators} from "angular2/common";
import {Todo} from "./Todo";
import {Validator} from "angular2/common";

@Component({
    selector: 'my-app',
    directives: [Todo],
    template: `
        <div>
            <form [ngFormModel]="todoForm">
                <label>
                    Title: <input type="text" [ngControl]="'title'" />
                </label>
                <button [disabled]="!todoForm.valid" (click)="addTodo()">Add</button>
            </form>
            <my-todo *ngFor="#todo of todos" [todo]="todo"></my-todo>
        </div>
    `
})
class App {
    public todos: Array<Object> = [];
    public todoForm: ControlGroup;

    //3/ 2. So we extracted that into method and called in constructor.
    constructor (private formBuilder: FormBuilder) {
        this.updateForm();
    }

    //4/ 3. And in `addTodo`
    addTodo () {
        this.todos.push({title: this.todoForm.value.title, done: false});
        this.updateForm();
    }

    //6/ 1. The easiest way to clear form after submit is to re-create it.
    updateForm () {
        const fb = this.formBuilder;
        this.todoForm = fb.group({
            title: fb.control('', Validators.required)
        });
    }
}

bootstrap(App, [FORM_PROVIDERS]);
