import { APP_ROUTES } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from "@angular/platform-browser";
import { provideHttpClient } from '@angular/common/http';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(APP_ROUTES,
      withPreloading(PreloadAllModules)
    )
  ]
})
