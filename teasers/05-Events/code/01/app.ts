import {bootstrap} from 'angular2/bootstrap';
import {Component} from 'angular2/core';
import {COMMON_DIRECTIVES} from "angular2/common";

@Component({
    selector: 'my-app',
    directives: [COMMON_DIRECTIVES],
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

    public onClick (button) {
        this.clicks.push(`clicked ${button.textContent}`);
    }
}

bootstrap(App);
