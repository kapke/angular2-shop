import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    //3/ To pass data we use square brackets
    template: `
        <my-todo *ngFor="let todo of todos" [todo]="todo"></my-todo>
    `
})
export class AppComponent {
    public todos: Array<Object> = [
        {title: 'my first todo', done: false},
        {title: 'my second todo', done: true}
    ];
}