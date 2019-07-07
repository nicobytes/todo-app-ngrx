import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutContainer } from './containers/layout/layout.container';
import { TodosGuard } from '@todos/guards/todos.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutContainer,
    canActivate: [ TodosGuard ]
  },
  {
    path: ':filter',
    component: LayoutContainer,
    canActivate: [ TodosGuard ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
