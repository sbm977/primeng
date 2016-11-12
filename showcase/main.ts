import {AppModule} from './app.module';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import { SharedService } from '../showcase/demo/service/sharedService';
import { CarService } from '../showcase/demo/service/carservice';


if (process.env.ENV === 'production') {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule, [CarService, SharedService]);