import { enableProdMode } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import {disableDeprecatedForms, provideForms} from '@angular/forms';

import { AppComponent } from './AppComponent';
import {HTTP_PROVIDERS} from "@angular/http";

import "rxjs/add/operator/map";
import "rxjs/add/operator/retry";
import "rxjs/add/operator/retryWhen";
import "rxjs/add/operator/scan";
import "rxjs/add/operator/delay";


if (WEBPACK_ENV === 'production') {
    enableProdMode();
}

bootstrap(AppComponent, [disableDeprecatedForms(), provideForms(), HTTP_PROVIDERS]);
