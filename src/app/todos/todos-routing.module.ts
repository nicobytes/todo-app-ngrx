import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutContainer } from './containers/layout/layout.container';
import { TodoDetailContainer } from './containers/todo-detail/todo-detail.container';
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
  },
  {
    path: 'detail/:id',
    component: TodoDetailContainer,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
