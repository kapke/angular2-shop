/// <reference path="ambients.d.ts" />
/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../../node_modules/angular2/bundles/typings/angular2/angular2.d.ts" />

import * as es6Shim from 'es6-shim';
import * as Reflect from 'reflect-metadata';
import {bootstrap} from 'angular2/angular2';

import StartingApp from './components/StartingApp';

bootstrap(StartingApp);
