import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Todo } from '@todos/models';

export const addTodo = createAction(
  '[TodoModule] AddTodo',
  props<{todo: Todo}>()
);

export const updateTodo = createAction(
  '[TodoModule] UpdateTodo',
  props<{update: Update<Todo>}>()
);

export const deleteTodo = createAction(
  '[TodoModule] DeleteTodo',
  props<{id: number}>()
);

export const loadTodos = createAction(
  '[TodoModule] LoadTodos',
  props<{todos: Todo[]}>()
);
