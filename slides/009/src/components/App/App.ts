import {Component, View} from 'angular2/core';

@Component({
    selector: 'my-app',
    templateUrl: 'src/components/App/my-app.html'
})
export default class App {
    public hello:string = 'Hello, World!';
}
