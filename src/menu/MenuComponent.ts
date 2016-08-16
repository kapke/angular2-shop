import {Component, Input} from "@angular/core";

import {MenuItem} from "./MenuItem";


@Component({
    selector: 's-menu',
    template: `
        <a *ngFor="let item of items" [routerLink]="item.link" routerLinkActive="active">{{ item.title }}</a>
    `,
    styles: [`
        :host {
            display: block;
            margin-bottom: 2em;
            border-bottom: 1px solid tomato;
        }
        a {
            transition: all 0.2s ease-out;
            display: inline-block;
            padding: 1em;
            text-decoration: none;
        }
        .active {
            background-color: tomato;
            color: white;
        }
    `]
})
export class MenuComponent {
    @Input() items: MenuItem[] = [];
}