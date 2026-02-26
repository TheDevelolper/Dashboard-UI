import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { initializeTheme } from '../projects/component-lib/src/lib/services/theme.service';

initializeTheme();

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
