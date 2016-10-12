import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    //2/ Pipes are simple converters from one format to another and they work in exactly the same way as pipes in shell
    template: `
        <div>{{ now | date:'medium' }}</div>
    `
})
export class AppComponent {
    public now = new Date();
}
