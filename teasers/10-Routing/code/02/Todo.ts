import {Component} from '@angular/core';
import {RouteParams} from "@angular/router-deprecated";

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

    //6/ routeParams allow us to extract data from current route
    constructor(routeParams: RouteParams) {
        this.todo = {
            title: `Todo #${routeParams.get('id')}`,
            done: false
        }
    }
}
