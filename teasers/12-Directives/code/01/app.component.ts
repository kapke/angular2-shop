import {Component, Directive, ElementRef, Renderer} from '@angular/core';

//3/ As component is a directive with view, we can use the same options in annotation
@Directive({
    selector: '[super]'
})
export class SuperDirective {
    // elementRef gives us access to element which directive is mount to
    constructor(elementRef: ElementRef, renderer: Renderer) {
        // Notice usage of Renderer class. There is also Renderer2 class with slightly different interface but it's an experimental API
        renderer.setElementStyle(elementRef.nativeElement, 'color', 'red');
    }
}

@Component({
    selector: 'my-app',
    //3/ Usage is simple - there should appear an element matching directive selector
    template: `
        <div>
            <div super>That is super!</div>
            <div>That is not</div>
        </div>
    `
})
export class AppComponent {}
