import {bootstrap} from '@angular/platform-browser-dynamic';import {FORM_PROVIDERS} from '@angular/common';
import {HTTP_PROVIDERS} from '@angular/http';

import App from './components/App/App';
import {PRODUCT_PROVIDERS} from './product/product';

bootstrap(App, [FORM_PROVIDERS, HTTP_PROVIDERS, PRODUCT_PROVIDERS]);
