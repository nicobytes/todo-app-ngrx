import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, catchError, mergeMap, map } from 'rxjs/operators';

import {
  LoadTodos,
  LoadTodosRequest,
  LoadTodosSuccess,
  LoadTodosFail,
  AddTodo,
  AddTodoRequest,
  AddTodoSuccess,
  AddTodoFail,
  UpdateTodo,
  UpdateTodoRequest,
  UpdateTodoSuccess,
  UpdateTodoFail,
  DeleteTodo,
  DeleteTodoRequest,
  DeleteTodoSuccess,
  DeleteTodoFail,
  TodoUIActionsTypes,
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

  @Effect() AddTodoRequest$ = this.actions$
    .pipe(
      ofType<AddTodoRequest>(TodoUIActionsTypes.AddTodoRequest),
      map(action => action.payload.todo),
      switchMap((todo) => {
        return this.todosService.createTodo(todo)
          .pipe(
            mergeMap((newTodo) => [
              new AddTodo({ todo: newTodo }),
              new AddTodoSuccess(),
            ]),
            catchError(error => of(new AddTodoFail({ error }))),
          );
      }),
    );

  @Effect() UpdateTodoRequest$ = this.actions$
    .pipe(
      ofType<UpdateTodoRequest>(TodoUIActionsTypes.UpdateTodoRequest),
      map(action => action.payload.update),
      switchMap((update) => {
        return this.todosService.updateTodo(update.changes)
          .pipe(
            mergeMap(() => [
              new UpdateTodo({ update }),
              new UpdateTodoSuccess(),
            ]),
            catchError(error => of(new UpdateTodoFail({ error }))),
          );
      }),
    );

    @Effect() DeleteTodoRequest$ = this.actions$
    .pipe(
      ofType<DeleteTodoRequest>(TodoUIActionsTypes.DeleteTodoRequest),
      map(action => action.payload.id),
      switchMap((id) => {
        return this.todosService.deleteTodo(id)
          .pipe(
            mergeMap(() => [
              new DeleteTodo({ id }),
              new DeleteTodoSuccess(),
            ]),
            catchError(error => of(new DeleteTodoFail({ error }))),
          );
      }),
    );

  constructor(
    private actions$: Actions,
    private todosService: TodosService
  ) { }

}
