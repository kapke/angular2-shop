import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';
import {COMMON_DIRECTIVES} from "@angular/common";
import {Timer} from './Timer';

@Component({
    selector: 'my-app',
    directives: [COMMON_DIRECTIVES, Timer],
    //3/ Usage of custom events looks the same as native ones. Data coming with event are available as `$event` variable
    template: `
        <div>
            <my-timer (tick)="onTick($event)"></my-timer>
            <ul>
                <li *ngFor="let tick of ticks">{{ tick.toLocaleTimeString() }}</li>
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
