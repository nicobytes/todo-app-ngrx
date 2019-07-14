import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable , of, forkJoin } from 'rxjs';
import { tap, take, switchMap, catchError } from 'rxjs/operators';

import { TodosModuleState } from '@todos/states';
import { getCountAllTodos } from '@todos/selectors';
import { loadTodosRequest } from '@todos/actions';

@Injectable()
export class TodosGuard implements CanActivate {

  constructor(
    private store: Store<TodosModuleState>,
  ) {}

  canActivate(): Observable<boolean> {
    return forkJoin([
      this.checkTodos(),
    ])
    .pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }

  private checkTodos() {
    return this.store.pipe(
      select(getCountAllTodos),
      tap(total => {
        if (total === 0) {
          this.dispatchLoadTodos();
        }
      }),
      take(1)
    );
  }

  private dispatchLoadTodos() {
    const action = loadTodosRequest();
    this.store.dispatch(action);
  }

}
