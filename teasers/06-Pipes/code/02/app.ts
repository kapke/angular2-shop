import {bootstrap} from 'angular2/bootstrap';
import {Component, Pipe} from 'angular2/core';
import {COMMON_DIRECTIVES} from "angular2/common";

@Pipe({
    name: 'tomorrow'
})
class TomorrowPipe {
    transform(value: Date): Date {
        return new Date(value.getTime() + 86400000);
    }
}

@Component({
    selector: 'my-app',
    pipes: [TomorrowPipe],
    template: `
        <div>Tomorrow is {{ now | tomorrow | date:'fullDate' }}</div>
    `
})
class App {
    public now = new Date();
}

bootstrap(App);
