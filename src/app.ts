import {bootstrap} from 'angular2/bootstrap';
import {FORM_PROVIDERS} from 'angular2/common';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';

import App from './components/App/AppComponent';
import {PRODUCT_PROVIDERS} from './product/product';
import ExchangeService from "./exchange-rates/ExchangeService";

bootstrap(App, [FORM_PROVIDERS, HTTP_PROVIDERS, ROUTER_PROVIDERS, PRODUCT_PROVIDERS, ExchangeService]);
