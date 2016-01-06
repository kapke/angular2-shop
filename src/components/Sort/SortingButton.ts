import {Component, EventEmitter} from 'angular2/core';
import {COMMON_DIRECTIVES} from 'angular2/common';

@Component({
    selector: 'sorting-button',
    inputs: ['sortingDescriptor', 'property'],
    outputs: ['sortingChange'],
    directives: [COMMON_DIRECTIVES],
    template: `
        <button [class]="sort"
                [ngClass]="{
                    active: sortingDescriptor.property == property,
                    ascending: sortingDescriptor.direction > 0,
                    descending: sortingDescriptor.direction < 0}"
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
    public sortingDescriptor: {property: string; direction: number};
    public sortingChange = new EventEmitter();

    onClick () {
        this.sortingChange.emit(null);
    }
}
