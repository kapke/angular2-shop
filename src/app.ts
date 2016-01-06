import {bootstrap} from 'angular2/bootstrap';

import {ProductRepository} from './product/product';

import App from './components/App/App';

bootstrap(App, [ProductRepository]);
