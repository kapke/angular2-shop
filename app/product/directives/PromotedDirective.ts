import {Directive} from 'angular2/core';
import {ElementRef} from "angular2/core";
import {Renderer} from "angular2/core";

@Directive({
    selector: '[sPromoted]'
})
export default class PromotedDirective {
    constructor (el: ElementRef, renderer: Renderer) {
        renderer.setElementClass(el.nativeElement, 'text-primary', true);
    }
}
