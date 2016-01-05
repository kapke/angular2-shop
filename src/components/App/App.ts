import {Component, View} from 'angular2/core';

@Component({
    selector: 'my-app',
    templateUrl: 'dist/components/App/my-app.html'
})
export default class App {
    public hello:string = 'Hello, World!';
}
