import {bootstrap} from 'angular2/bootstrap';
import {Component} from 'angular2/core';
import {COMMON_DIRECTIVES} from "angular2/common";

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
