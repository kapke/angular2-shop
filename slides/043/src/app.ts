import {bootstrap} from 'angular2/bootstrap';
import {FORM_PROVIDERS} from 'angular2/common';
import {HTTP_PROVIDERS} from 'angular2/http';

import App from './components/App/App';
import {PRODUCT_PROVIDERS} from './product/product';

bootstrap(App, [FORM_PROVIDERS, HTTP_PROVIDERS, PRODUCT_PROVIDERS]);
