import {Component, EventEmitter} from '@angular/core';

@Component({
    selector: 'my-timer',
    //To create own event we need to mark it as `output`, @Output decorator is also available
    outputs: ['tick'],
    template: `
        <div>{{ time.toLocaleTimeString() }}</div>
    `
})
export class Timer {
    //This property needs to be EventEmitter instance
    public tick = new EventEmitter();
    public time = new Date();

    constructor () {
        setInterval(() => {
            const date = new Date();
            //Finally we can emit an event using `emit` method on our eventEmitter
            this.tick.emit(date);
            this.time = date;
        }, 1000);
    }
}
