import {Component} from '@angular/core';


@Component({
    selector: 'my-app',
    //3/ To handle event we use event name in curly braces
    template: `
        <div>
            <button #button (click)="onClick(button)">Click me!</button>
            <ul>
                <li *ngFor="let click of clicks">{{ click }}</li>
            </ul>
        </div>
    `
})
export class AppComponent {
    public clicks: Array<string> = [];

    //3/ We need to create a method in component class, notify that button is DOM element
    public onClick (button) {
        this.clicks.push(`clicked button ${button.textContent}`);
    }
}