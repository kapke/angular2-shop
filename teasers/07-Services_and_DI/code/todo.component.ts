import {Component} from '@angular/core';

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
}
