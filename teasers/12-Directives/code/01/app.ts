import {bootstrap} from 'angular2/bootstrap';
import {Component, Directive, ElementRef, Renderer} from 'angular2/core';

//3/ As component is a directive with view, we can use the same options in annotation
@Directive({
    selector: '[super]'
})
class SuperDirective {
    // elementRef gives us access to element which directive is mount to
    constructor(elementRef: ElementRef, renderer: Renderer) {
        renderer.setElementStyle(elementRef, 'color', 'red');
    }
}

@Component({
    selector: 'my-app',
    directives: [SuperDirective],
    //3/ Usage is simple - there should appear an element matching directive selector
    template: `
        <div>
            <div super>That is super!</div>
            <div>That is not</div>
        </div>
    `
})
class App {}

bootstrap(App);
