import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';
import {COMMON_DIRECTIVES} from '@angular/common';

@Component({
    selector: 'my-app',
    //Any directive we want to use in our component should appear in this array
    directives: [COMMON_DIRECTIVES],
    //3/ When we do that, we can use it
    template: `
        <div *ngFor="let item of items">{{ item }}</div>
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
