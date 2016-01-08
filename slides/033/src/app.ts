import {bootstrap} from 'angular2/bootstrap';
import {FORM_PROVIDERS} from 'angular2/common';

import {ProductRepository} from './product/product';

import App from './components/App/App';

bootstrap(App, [FORM_PROVIDERS, ProductRepository]);
