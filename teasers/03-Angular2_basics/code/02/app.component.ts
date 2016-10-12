import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    //3/ We can use directives using following syntax
    template: `
        <div *ngFor="let item of items">{{ item }}</div>
    `
})
export class AppComponent {
    public items = [
        'first',
        'second',
        'third'
    ];
}
