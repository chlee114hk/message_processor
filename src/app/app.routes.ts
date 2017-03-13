import { Routes } from '@angular/router';
import { MessagesComponent } from './message';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '', component: MessagesComponent }
];
