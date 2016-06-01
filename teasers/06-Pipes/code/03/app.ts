import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component, Pipe} from '@angular/core';
import {COMMON_DIRECTIVES} from "@angular/common";

//4/ To create a stateful pipe, mark it as _not pure_
@Pipe({
    name: 'timer',
    pure: false
})
//13/ Then `transform` method will be called every time anything changes in parent component to provide state update
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
