import {bootstrap} from 'angular2/bootstrap';

import {ProductRepository} from './product/product';

import App from './components/App/App';

//But we need to declare that ProductRepository can be injected
bootstrap(App, [ProductRepository]);
