import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'my-app',
    //7/ NgFor, similar to NgIf, allows us to use 'as' keyword to assign resolved data
    template: `
        <ul *ngFor="let user of usersPromise | async as users, index as i">
            <li>User {{ i+1 }}/{{ users.length}}: {{ user.name }} {{ user.surname }}</li>
        </ul>
    `
})
export class AppComponent implements OnInit {
    public usersPromise: Promise<Array<{name: string; surname: string}>>;

    public ngOnInit (): void {
        this.usersPromise = new Promise((resolve) => {
            setTimeout(
                () => resolve([
                    {name: 'John', surname: 'Smith'},
                    {name: 'Robert', surname: 'Johnson'},
                    {name: 'David', surname: 'Jones'},
                ]),
                5000,
            );
        });
    }
}
