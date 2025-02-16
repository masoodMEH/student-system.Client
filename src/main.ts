import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { routes } from './app/app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

bootstrapApplication(AppComponent, {
  ...appConfig,  // Spread the appConfig to include its content
  providers: [
    ...appConfig.providers,  // Ensure the providers from appConfig are included
    provideRouter(routes),  // Add any additional providers here
    provideHttpClient(),
    provideClientHydration(withEventReplay()), provideAnimationsAsync(), provideAnimationsAsync()
  ]
}).catch(err => console.error(err));
