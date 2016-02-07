import {bootstrap} from 'angular2/bootstrap';
import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <div>{{ title }}</div>
    `
})
class App {
    public title: string = 'Hello, world!'
}

bootstrap(App);
