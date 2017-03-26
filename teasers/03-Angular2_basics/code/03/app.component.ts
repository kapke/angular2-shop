import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'my-app',
    //7/ NgIf directive supports else block now
    template: `
        <div *ngIf="userPromise | async as user; else loading">
            <header>Hello, {{ user.name }} {{ user.surname }}!</header>
        </div>
        <ng-template #loading>
            Loading data
        </ng-template>
    `
})
export class AppComponent implements OnInit {
    public userPromise: Promise<{name: string; surname: string}>;

    public ngOnInit (): void {
        this.userPromise = new Promise((resolve) => {
            setTimeout(
                () => resolve({name: 'John', surname: 'Smith'}),
                5000,
            );
        });
    }
}
