import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";


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
export class TodoComponent {
    public todo;

    // ActivatedRoute allow us to extract data from current route.
    constructor(route: ActivatedRoute) {
        //7/ route.params is an Observable!
        route.params
            .forEach((param) => {
                this.todo = {
                    title: `Todo #${param['index']}`,
                    done: false
                }
            });
    }
}
