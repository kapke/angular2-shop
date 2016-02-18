import {Component, EventEmitter} from 'angular2/core';
import {COMMON_DIRECTIVES} from 'angular2/common';
import SortingButton from './SortingButton';

@Component({
    selector: 'sorting-panel',
    // Our sorting panel gets sorting descriptor and list of properties to sort
    inputs: ['descriptor', 'options'],
    // It emits event every time sorting descriptor changes
    outputs: ['sortingChange'],
    directives: [COMMON_DIRECTIVES, SortingButton],
    //6/ And displays list of buttons used for sorting
    template: `
        <sorting-button *ngFor="#option of options"
                        [descriptor]="descriptor"
                        [property]="option.property"
                        (sortingChange)="onSortingChange(option)">{{ option.name }}</sorting-button>
    `
})
export default class SortingPanel {
    public descriptor = {property: '', direction: 0};
    public options: string[] = [];
    public sortingChange = new EventEmitter();

    //9/ It also knows how to work with several buttons
    public onSortingChange (option) {
        if(this.descriptor.property != option.property) {
            this.descriptor.property = option.property;
            this.descriptor.direction = 1;
        } else {
            this.descriptor.direction = this.getNextSortingDirection(this.descriptor.direction);
        }
        this.sortingChange.emit(this.descriptor);
    }

    //7/ And how to modify direction we sort
    private getNextSortingDirection (sortingDirection: number) {
        if(sortingDirection == 1) {
            return -1;
        } else {
            return sortingDirection + 1;
        }
    }
}
