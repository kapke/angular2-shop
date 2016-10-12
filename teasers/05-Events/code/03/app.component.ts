import { Component } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
    selector: 'my-app',
    //3/ If we bind to input using formControl directive...
    template: `
        <div>
            Enter text: <input type="text" [formControl]="myInput">
            <ul>
                <li *ngFor="let value of values">{{ value }}</li>
            </ul>
        </div>
    `
})
export class AppComponent {
    public values: Array<string> = [];
    //And create a control instance...
    public myInput = new FormControl();

    constructor () {
        //Then we have access to an observable emitting new event every time value changes
        this.myInput.valueChanges.subscribe(value => this.values.push(value));
    }
}