import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'my-app',
    //6/ We can just put an array describing route we want to go to
    template: `
        <div>
            <nav>
                <a [routerLink]="['/todos', 0]">Todo #0</a>
                <a [routerLink]="['/todos', 1]">Todo #1</a>
            </nav>
            <router-outlet></router-outlet>
        </div>
    `
})
export class AppComponent {
}
