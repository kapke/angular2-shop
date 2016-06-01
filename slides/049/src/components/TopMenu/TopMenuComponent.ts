import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';

@Component({
    selector: 'top-menu',
    directives: [ROUTER_DIRECTIVES],
    //8/ routerLink is directive used to create links
    template: `
        <nav>
            <ul class="nav nav-tabs">
                <li role="presentation"><a [routerLink]="['Products']">Products</a></li>
                <li role="presentation"><a [routerLink]="['OrderForm']">Order form</a></li>
            </ul>
        </nav>
    `,
    styles: [
        `ul {
            margin-bottom: 1em;
        }`
    ]
})
export default class TopMenuComponent {
}
