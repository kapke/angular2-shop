import {bootstrap} from 'angular2/bootstrap';
import {Component, Pipe} from 'angular2/core';
import {COMMON_DIRECTIVES} from "angular2/common";

//3/ 2. And mark it as a pipe
@Pipe({
    name: 'tomorrow'
})
//5/ 1. If we want to create own pipe, we need to create a class with `transform` method
class TomorrowPipe {
    transform(value: Date): Date {
        return new Date(value.getTime() + 86400000);
    }
}

@Component({
    selector: 'my-app',
    //To use it, we need to mark our wish
    pipes: [TomorrowPipe],
    //2/ And then we can use it under name we declared
    template: `
        <div>Tomorrow is {{ now | tomorrow | date:'fullDate' }}</div>
    `
})
class App {
    public now = new Date();
}

bootstrap(App);
