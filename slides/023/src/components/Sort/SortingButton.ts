import {Component, EventEmitter} from '@angular/core';
import {COMMON_DIRECTIVES} from '@angular/common';

@Component({
    selector: 'sorting-button',
    inputs: ['sortingDescriptor', 'property'],
    // To create own events you have to mark field as an `output`
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
    // Then create an EventEmitter instance here
    public sortingChange = new EventEmitter();

    //3/ And finally you can emit your events using `emit` method
    onClick () {
        this.sortingChange.emit(null);
    }
}
