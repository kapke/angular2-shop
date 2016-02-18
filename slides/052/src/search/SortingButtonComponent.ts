import {Component, EventEmitter} from 'angular2/core';
import {COMMON_DIRECTIVES} from 'angular2/common';
import {SortingDescriptor} from "./search";

@Component({
    selector: 'sorting-button',
    inputs: ['descriptor', 'property'],
    outputs: ['sortingChange'],
    directives: [COMMON_DIRECTIVES],
    template: `
        <button class="btn btn-default"
                [ngClass]="{
                    active: descriptor.property == property && descriptor.direction != 0,
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
export default class SortingButtonComponent {
    public property: string;
    public descriptor: SortingDescriptor;
    public sortingChange = new EventEmitter();

    onClick () {
        this.sortingChange.emit(null);
    }
}
