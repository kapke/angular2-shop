import {bootstrap} from 'angular2/bootstrap';
import {Component} from 'angular2/core';
import {COMMON_DIRECTIVES} from "angular2/common";
import {Timer} from './Timer';

@Component({
    selector: 'my-app',
    directives: [COMMON_DIRECTIVES, Timer],
    //3/ Usage of custom events looks the same as native ones. Data coming with event are available as `$event` variable
    template: `
        <div>
            <my-timer (tick)="onTick($event)"></my-timer>
            <ul>
                <li *ngFor="#tick of ticks">{{ tick.toLocaleTimeString() }}</li>
            </ul>
        </div>
    `
})
class App {
    public ticks: Array<Date> = [];

    public onTick (tick: Date) {
        this.ticks.push(tick);
    }
}

bootstrap(App);
