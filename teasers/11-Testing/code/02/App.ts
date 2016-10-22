import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <div>{{ title }}</div>
    `
})
export class App {
    public title = 'Hello, world!';
}
