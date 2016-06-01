import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';
import {COMMON_DIRECTIVES, Control} from "@angular/common";

@Component({
    selector: 'my-app',
    directives: [COMMON_DIRECTIVES],
    //3/ If we bind to input using ngFormControl directive...
    template: `
        <div>
            <input type="text" [ngFormControl]="myInput">
            <ul>
                <li *ngFor="let value of values">{{ value }}</li>
            </ul>
        </div>
    `
})
class App {
    public values: Array<string> = [];
    //And create a control instance...
    public myInput = new Control();

    constructor () {
        //Then we have access to an observable emitting new event every time value changes
        this.myInput.valueChanges.subscribe(value => this.values.push(value));
    }
}

bootstrap(App);
