import {bootstrap} from 'angular2/bootstrap';
import {FORM_PROVIDERS} from 'angular2/common';
import {HTTP_PROVIDERS} from 'angular2/http';

import App from './components/App/App';
import StaticJsonProductRepository from "./product/repositories/StaticJsonProductRepository";

//To use Http we need to add HTTP_PROVIDERS to providers list
bootstrap(App, [FORM_PROVIDERS, HTTP_PROVIDERS, StaticJsonProductRepository]);
