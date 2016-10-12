import { Component, EventEmitter, Output } from '@angular/core';


@Component({
    selector: 'my-timer',
    template: `
        <div>{{ time.toLocaleTimeString() }}</div>
    `
})
export class TimerComponent {
    //This property needs to be EventEmitter instance, fields marked as Outputs are basically own events
    @Output() public tick = new EventEmitter();
    public time = new Date();

    constructor () {
        setInterval(() => {
            const date = new Date();
            //Now we can emit an event using `next` method on our eventEmitter
            this.tick.next(date);
            this.time = date;
        }, 1000);
    }
}
