import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, catchError, mergeMap } from 'rxjs/operators';

import {
  LoadTodos,
  LoadTodosRequest,
  LoadTodosSuccess,
  LoadTodosFail,
  TodoUIActionsTypes
} from '@todos/actions';

import { TodosService } from '@todos/services/todos.service';

@Injectable()
export class TodosEffects {

  @Effect() LoadTodosRequest$ = this.actions$
    .pipe(
      ofType<LoadTodosRequest>(TodoUIActionsTypes.LoadTodosRequest),
      switchMap(() => {
        return this.todosService.getAllTodos()
          .pipe(
            mergeMap((todos) => [
              new LoadTodos({ todos }),
              new LoadTodosSuccess(),
            ]),
            catchError(error => of(new LoadTodosFail({ error }))),
          );
      }),
    );

  constructor(
    private actions$: Actions,
    private todosService: TodosService
  ) { }

}
