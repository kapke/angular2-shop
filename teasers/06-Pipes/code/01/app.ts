import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';
import {COMMON_DIRECTIVES} from "@angular/common";

@Component({
    selector: 'my-app',
    //2/ Pipes are simple converters from one format to another and they work in exactly the same way as pipes in shell
    template: `
        <div>{{ now | date:'medium' }}</div>
    `
})
class App {
    public now = new Date();
}

bootstrap(App);
