import {Component, Input, Output, EventEmitter} from '@angular/core';

import {SortingDescriptor, SortingOrder} from "./SortingDescriptor";


@Component({
    selector: 's-sorting-button',
    template: `
        <button [ngClass]="classMap" (click)="changeSortingOrder()">
            <ng-content></ng-content>
        </button>
    `,
    styles: [`
        button {
            display: inline-block;
            width: 5rem;
        }
        .active.ascending::after {
            content: '▲';
        }
        .active.descending::after {
            content: '▼';
        }
    `]
})
export class SortingButtonComponent {
    @Input() public name: string = '';
    @Input() public sortingDescriptor: SortingDescriptor;
    @Output() public sortingDescriptorChange = new EventEmitter<SortingDescriptor>();

    get classMap () {
        return {
            active: this.sortingDescriptor.property == this.name,
            ascending: this.sortingDescriptor.order == SortingOrder.Ascending,
            descending: this.sortingDescriptor.order == SortingOrder.Descending
        }
    }

    changeSortingOrder () {
        this.sortingDescriptorChange.emit(this.sortingDescriptor.update(this.name));
    }
}