import { Route } from '@angular/router';
import { LayoutsComponent } from '@aio/web';

export const appRoutes: Route[] = [
  { // PUBLIC ROUTING - LOAD CHILD ROUTES FROM CHILD ROUTING
    path: '',
    component: LayoutsComponent,
    data: { layout: 'default' },
    children: [
      { path: '', loadChildren: () => import('@aio/web').then(m => m.HomepageModule)},
      { path: 'legal', loadChildren: () => import('@aio/web').then(m => m.LegalpageModule)},
      { path: 'docs', loadChildren: () => import('@aio/web').then(m => m.DocspageModule)},
      { path: 'developers', loadChildren: () => import('@aio/web').then(m => m.DevspageModule)},
    ],
  },
  { // AUTHENTICATION ROUTING
    path: 'auth',
    component: LayoutsComponent,
    data: { layout: 'default' },
    children: [
      { path: 'login', loadChildren: () => import('@aio/web').then(m => m.LoginModule)},
      { path: 'register', loadChildren: () => import('@aio/web').then(m => m.RegisterModule)},
      { path: 'forgot', loadChildren: () => import('@aio/web').then(m => m.ForgotModule)},
      { path: 'reset', loadChildren: () => import('@aio/web').then(m => m.ResetModule)},
      { path: 'verify', loadChildren: () => import('@aio/web').then(m => m.VerifyModule)},
    ],
  },
  { // PRIVATE DASHBOARD ROUTING
    path: 'dashboard',
    component: LayoutsComponent,
    data: { layout: 'default' },
    children: [],
  },
  { // PRIVATE SETTINGS ROUTING
    path: 'settings',
    component: LayoutsComponent,
    data: { layout: 'default' },
    children: [],
  },
];
