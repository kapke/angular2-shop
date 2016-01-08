import {bootstrap} from 'angular2/bootstrap';
import {FORM_PROVIDERS} from 'angular2/common';
import {HTTP_PROVIDERS} from 'angular2/http';

import App from './components/App/App';
import StaticJsonProductRepository from "./product/repositories/StaticJsonProductRepository";

bootstrap(App, [FORM_PROVIDERS, HTTP_PROVIDERS, StaticJsonProductRepository]);
