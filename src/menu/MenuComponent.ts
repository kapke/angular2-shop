import {Component, Input} from "@angular/core";

import {MenuItem} from "./MenuItem";


@Component({
    selector: 's-menu',
    template: `
        <a *ngFor="let item of items" [routerLink]="item.link">{{ item.title }}</a>
    `,
    styles: [`
        a {
            margin: 1em;
            text-decoration: none;
        }
    `]
})
export class MenuComponent {
    @Input() items: MenuItem[] = [];
}