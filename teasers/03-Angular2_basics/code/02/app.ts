import {bootstrap} from 'angular2/bootstrap';
import {Component} from 'angular2/core';
import {COMMON_DIRECTIVES} from 'angular2/common';

@Component({
    selector: 'my-app',
    directives: [COMMON_DIRECTIVES],
    template: `
        <div *ngFor="#item of items">{{ item }}</div>
    `
})
class App {
    public items = [
        'first',
        'second',
        'third'
    ];
}

bootstrap(App);
