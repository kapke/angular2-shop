import {Directive, ElementRef, Renderer} from 'angular2/core';

@Directive({
    selector: '[sPromoted]'
})
export default class PromotedDirective {
    constructor (el: ElementRef, renderer: Renderer) {
        renderer.setElementClass(el, 'text-primary', true);
    }
}
