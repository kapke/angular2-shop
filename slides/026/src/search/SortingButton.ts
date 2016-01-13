import {Component, EventEmitter} from 'angular2/core';
import {COMMON_DIRECTIVES} from 'angular2/common';
import {SortingDescriptor} from "./SearchTypes";

@Component({
    selector: 'sorting-button',
    inputs: ['descriptor', 'property'],
    outputs: ['sortingChange'],
    directives: [COMMON_DIRECTIVES],
    template: `
        <button [ngClass]="{
                    active: descriptor.property == property,
                    ascending: descriptor.direction > 0,
                    descending: descriptor.direction < 0}"
                (click)="onClick()">
            <ng-content></ng-content>
        </button>
    `,
    styles: [
        `
        .active.ascending::before {
            content: '^ ';
        }
        .active.descending::before {
            content: 'v ';
        }
        `
    ]
})
export default class SortingButton {
    public property: string;
    public descriptor: SortingDescriptor;
    public sortingChange = new EventEmitter();

    onClick () {
        this.sortingChange.emit(null);
    }
}
