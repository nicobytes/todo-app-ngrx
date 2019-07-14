import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Todo } from '@todos/models';

export const loadTodosRequest = createAction(
  '[TodoModule] LoadTodosRequest'
);

export const loadTodosSuccess = createAction(
  '[TodoModule] LoadTodosSuccess'
);

export const loadTodosFail = createAction(
  '[TodoModule] LoadTodosFail',
  props<{ error: string }>()
);

export const addTodoRequest = createAction(
  '[TodoModule] AddTodoRequest',
  props<{ todo: Todo }>()
);

export const addTodoSuccess = createAction(
  '[TodoModule] AddTodoSuccess',
);

export const addTodoFail = createAction(
  '[TodoModule] AddTodoFail',
  props<{ error: string }>()
);

export const updateTodoRequest = createAction(
  '[TodoModule] UpdateTodoRequest',
  props<{ update: Update<Todo> }>()
);

export const updateTodoSuccess = createAction(
  '[TodoModule] updateTodoSuccess'
);

export const updateTodoFail = createAction(
  '[TodoModule] UpdateTodoFail',
  props<{ error: string }>()
);

export const deleteTodoRequest = createAction(
  '[TodoModule] DeleteTodoRequest',
  props<{ id: number }>()
);

export const deleteTodoSuccess = createAction(
  '[TodoModule] DeleteTodoSuccess'
);

export const deleteTodoFail = createAction(
  '[TodoModule] DeleteTodoFail',
  props<{ error: string }>()
);
