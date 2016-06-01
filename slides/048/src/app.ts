import {bootstrap} from '@angular/platform-browser-dynamic';
import {FORM_PROVIDERS, APP_BASE_HREF} from '@angular/common';
import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {provide} from "@angular/core";

import App from './components/App/AppComponent';
import {PRODUCT_PROVIDERS} from './product/product';

bootstrap(App, [
    FORM_PROVIDERS,
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    PRODUCT_PROVIDERS,
    //alternative way to provide base href is to set APP_BASE_HREF programmatically
    provide(APP_BASE_HREF, {useValue: '/'})
]);
