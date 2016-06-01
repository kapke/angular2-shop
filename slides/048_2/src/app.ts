import {bootstrap} from '@angular/platform-browser-dynamic';
import {FORM_PROVIDERS} from '@angular/common';
import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {provide} from "@angular/core";

import App from './components/App/AppComponent';
import {PRODUCT_PROVIDERS} from './product/product';

bootstrap(App, [
    FORM_PROVIDERS,
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    PRODUCT_PROVIDERS
]);
