import {Directive, ElementRef, Renderer} from 'angular2/core';

//3/ As components are directives with view, we can use exactly the same properties
@Directive({
    selector: '[sPromoted]'
})
//5/ The simplest direcitve adding class to an element. For more advanced usage you can use el.nativeElement
export default class PromotedDirective {
    constructor (el: ElementRef, renderer: Renderer) {
        renderer.setElementClass(el, 'text-primary', true);
    }
}
