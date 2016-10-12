import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'my-app',
    //6/ As routerLink doesn't support parameters in sensible way we use click action...
    template: `
        <div>
            <nav>
                <a (click)="goTo(0)">Todo #0</a>
                <a (click)="goTo(1)">Todo #1</a>
            </nav>
            <router-outlet></router-outlet>
        </div>
    `
})
export class AppComponent {
    //5/ ...and router directly
    constructor (private router: Router) {}

    goTo (index: number) {
        this.router.navigate(['todos', index]);
    }
}
