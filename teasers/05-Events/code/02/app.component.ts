import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    //3/ Usage of custom events looks the same as native ones. Data coming with event are available as `$event` variable
    template: `
        <div>
            <my-timer (tick)="onTick($event)"></my-timer>
            <ul>
                <li *ngFor="let tick of ticks">{{ tick.toLocaleTimeString() }}</li>
            </ul>
        </div>
    `
})
export class AppComponent {
    public ticks: Array<Date> = [];

    public onTick (tick: Date) {
        this.ticks.push(tick);
    }
}