import { Component, Input } from '@angular/core';

@Component({
    selector: 'my-todo',
    template: `
        <div>
            <input type="checkbox" [checked]="todo.done" />
            {{ todo.title }}
        </div>
    `
})
export class TodoComponent {
    @Input() public todo;
}
