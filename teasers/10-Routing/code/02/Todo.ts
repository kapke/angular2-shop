import {Component} from 'angular2/core';
import {RouteParams} from "angular2/router";

@Component({
    selector: 'my-todo',
    inputs: ['todo'],
    template: `
        <div>
            <input type="checkbox" [checked]="todo.done" />
            {{ todo.title }}
        </div>
    `
})
export class Todo {
    public todo;

    constructor(routeParams: RouteParams) {
        this.todo = {
            title: `Todo #${routeParams.get('id')}`,
            done: false
        }
    }
}
