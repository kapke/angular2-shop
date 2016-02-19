import {bootstrap} from 'angular2/bootstrap';
import {Component} from 'angular2/core';
import {COMMON_DIRECTIVES} from 'angular2/common';

@Component({
    selector: 'my-app',
    //Any directive we want to use in our component should appear in this array
    directives: [COMMON_DIRECTIVES],
    //3/ When we do that, we can use it
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
