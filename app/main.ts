import {bootstrap}    from 'angular2/platform/browser';
import {enableProdMode} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {AppComponent} from './app.component';
import {AppService} from './app.service'

enableProdMode();
bootstrap(AppComponent, [HTTP_PROVIDERS, AppService]);
