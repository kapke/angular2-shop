import {bootstrap} from 'angular2/bootstrap';
import {Component, Directive, ElementRef, Renderer} from 'angular2/core';

@Directive({
    selector: '[super]'
})
class SuperDirective {
    constructor(elementRef: ElementRef, renderer: Renderer) {
        renderer.setElementStyle(elementRef, 'color', 'red');
    }
}

@Component({
    selector: 'my-app',
    directives: [SuperDirective],
    template: `
        <div>
            <div super>That is super!</div>
            <div>That is not</div>
        </div>
    `
})
class App {}

bootstrap(App);
