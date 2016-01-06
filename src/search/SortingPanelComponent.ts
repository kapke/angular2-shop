import {Component, EventEmitter} from 'angular2/core';
import {COMMON_DIRECTIVES} from 'angular2/common';
import SortingButtonComponent from './SortingButtonComponent';
import {SortingDescriptor, SortingOption} from "./search";



@Component({
    selector: 'sorting-panel',
    inputs: ['descriptor', 'options'],
    outputs: ['sortingChange'],
    directives: [COMMON_DIRECTIVES, SortingButtonComponent],
    template: `
        <sorting-button *ngFor="#option of options"
                        [descriptor]="descriptor"
                        [property]="option.property"
                        (sortingChange)="onSortingChange(option)">{{ option.name }}</sorting-button>
    `
})
export default class SortingPanelComponent {
    public descriptor:SortingDescriptor = {direction: 0, property: ''};
    public options: SortingOption[] = [];
    public sortingChange = new EventEmitter();

    public onSortingChange (option) {
        if(this.descriptor.property != option.property) {
            this.descriptor.property = option.property;
            this.descriptor.direction = 1;
        } else {
            this.descriptor.direction = this.getNextSortingDirection(this.descriptor.direction);
        }
        this.sortingChange.emit(this.descriptor);
    }

    private getNextSortingDirection (sortingDirection: number) {
        if(sortingDirection == 1) {
            return -1;
        } else {
            return sortingDirection + 1;
        }
    }
}
