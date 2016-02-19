import {Component} from 'angular2/core';

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
export class Todo {
    // We can also use @Input() annotation instead of config in @Component()
    public todo;
}
