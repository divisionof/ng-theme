/// <reference path="../../../typings/globals/core-js/index.d.ts" />

import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { appRouterProviders } from './app/app.routes';
import { AppComponent } from './app/app.component';

bootstrap(AppComponent, [HTTP_PROVIDERS, appRouterProviders]);
