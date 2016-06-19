import { enableProdMode } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';


if (WEBPACK_ENV === 'production') {
    enableProdMode();
}

bootstrap(AppComponent);
