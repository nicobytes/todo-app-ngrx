import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component'),
    pathMatch: 'full'
  },
  {
    path: ':filter',
    loadComponent: () => import('./pages/home/home.component'),
  }
];

