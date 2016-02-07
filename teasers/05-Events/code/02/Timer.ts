import {Component, EventEmitter} from 'angular2/core';

@Component({
    selector: 'my-timer',
    outputs: ['tick'],
    template: `
        <div>{{ time.toLocaleTimeString() }}</div>
    `
})
export class Timer {
    public tick = new EventEmitter();
    public time = new Date();

    constructor () {
        setInterval(() => {
            const date = new Date();
            this.tick.emit(date);
            this.time = date;
        }, 1000);
    }
}
