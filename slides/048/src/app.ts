import {bootstrap} from 'angular2/bootstrap';
import {FORM_PROVIDERS} from 'angular2/common';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS, APP_BASE_HREF} from 'angular2/router';
import {provide} from "angular2/core";

import App from './components/App/AppComponent';
import {PRODUCT_PROVIDERS} from './product/product';

//alternative way to provide base href
bootstrap(App, [
    FORM_PROVIDERS,
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    PRODUCT_PROVIDERS,
    provide(APP_BASE_HREF, {useValue: '/'})
]);
