import {bootstrap} from '@angular/platform-browser-dynamic';import {FORM_PROVIDERS} from '@angular/common';
import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';

import AppComponent from './components/App/AppComponent';
import {PRODUCT_PROVIDERS} from './product/product';
import ExchangeService from "./exchange-rates/ExchangeService";

bootstrap(AppComponent, [FORM_PROVIDERS, HTTP_PROVIDERS, ROUTER_PROVIDERS, PRODUCT_PROVIDERS, ExchangeService]);
