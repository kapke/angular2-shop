import {Component} from '@angular/core';

@Component({
    selector: 'my-todo',
    //To receive data we need to mark property as an `input`
    inputs: ['todo'],
    template: `
        <div>
            <input type="checkbox" [checked]="todo.done" />
            {{ todo.title }}
        </div>
    `
})
export class TodoComponent {
    // We can also use @Input() annotation instead of config in @Component()
    public todo;
}
