import {bootstrap} from 'angular2/bootstrap';
import {FORM_PROVIDERS} from 'angular2/common';

import {ProductRepository} from './product/product';

import App from './components/App/App';

//Of course to make FormBuilder available through DI container we need to declare it here
bootstrap(App, [FORM_PROVIDERS, ProductRepository]);
