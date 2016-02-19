import {bootstrap} from 'angular2/bootstrap';
import {Component} from 'angular2/core';
import {COMMON_DIRECTIVES} from "angular2/common";

@Component({
    selector: 'my-app',
    directives: [COMMON_DIRECTIVES],
    //3/ To handle event we use event name in curly braces
    template: `
        <div>
            <button #button (click)="onClick(button)">Click me!</button>
            <ul>
                <li *ngFor="#click of clicks">{{ click }}</li>
            </ul>
        </div>
    `
})
class App {
    public clicks: Array<string> = [];

    //3/ We need to create a method in component class, notify that button is DOM element
    public onClick (button) {
        this.clicks.push(`clicked ${button.textContent}`);
    }
}

bootstrap(App);
