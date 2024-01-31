import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';

export const APP_URL = 'https://api.realworld.io/api'

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
