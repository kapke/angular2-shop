import {bootstrap} from 'angular2/bootstrap';
import {Component, Pipe} from 'angular2/core';
import {COMMON_DIRECTIVES} from "angular2/common";

@Pipe({
    name: 'timer',
    pure: false
})
class TimerPipe {
    private timestamp = new Date();

    constructor () {
        setInterval(() => {
            this.timestamp = new Date();
        }, 1000);
    }

    transform(value: string): string {
        return this.timestamp.toLocaleTimeString()+' '+value;
    }
}

@Component({
    selector: 'my-app',
    pipes: [TimerPipe],
    template: `
        <div>
            <input type="text" [(ngModel)]="value" />
        </div>
        <div>{{ value | timer }}</div>
    `
})
class App {
    public value: string = ''
}

bootstrap(App);
