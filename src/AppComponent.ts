import {Component, Inject} from "@angular/core";
import {MenuItem, MenuComponent} from "./menu";


@Component({
    selector: 's-app',
    directives: [MenuComponent],
    template: `
        <s-menu [items]="menuItems"></s-menu>
        <hr />
        <router-outlet></router-outlet>
    `,
    styles: [`
        :host {
            font-family: sans-serif;
        }
    `]
})
export class AppComponent {
    constructor (@Inject('S_MENU_ITEMS') private menuItems: MenuItem[]) {}
}