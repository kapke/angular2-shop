import { enableProdMode } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import {disableDeprecatedForms, provideForms} from '@angular/forms';

import { AppComponent } from './AppComponent';


if (WEBPACK_ENV === 'production') {
    enableProdMode();
}

bootstrap(AppComponent, [disableDeprecatedForms(), provideForms()]);
