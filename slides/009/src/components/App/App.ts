import {Component, View} from '@angular/core';

//4/ 2. But it needs to be properly described in order to make Angular aware of it
@Component({
    selector: 'my-app',
    templateUrl: 'src/components/App/my-app.html'
})
//3/ 1. A component is simple class, which contains data that can be accessed in template
export default class App {
    public hello:string = 'Hello, World!';
}
