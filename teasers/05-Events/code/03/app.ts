import {bootstrap} from 'angular2/bootstrap';
import {Component} from 'angular2/core';
import {COMMON_DIRECTIVES, Control} from "angular2/common";

@Component({
    selector: 'my-app',
    directives: [COMMON_DIRECTIVES],
    template: `
        <div>
            <input type="text" [ngFormControl]="myInput">
            <ul>
                <li *ngFor="#value of values">{{ value }}</li>
            </ul>
        </div>
    `
})
class App {
    public values: Array<string> = [];
    public myInput = new Control();

    constructor () {
        this.myInput.valueChanges.subscribe(value => this.values.push(value));
    }
}

bootstrap(App);
