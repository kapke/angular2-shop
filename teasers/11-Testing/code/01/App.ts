import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <div>{{ title }}</div>
    `
})
export class App {
    public title = 'Hello, world!';
}
