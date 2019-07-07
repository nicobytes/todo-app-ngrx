import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Todo } from '@todos/models';

export enum TodoActionsTypes {
  AddTodo    = '[TodoModule] AddTodo',
  DeleteTodo = '[TodoModule] DeleteTodo',
  UpdateTodo = '[TodoModule] UpdateTodo',
  LoadTodos  = '[TodoModule] LoadTodos',
}

export class AddTodo implements Action {
  readonly type = TodoActionsTypes.AddTodo;
  constructor(public payload: { todo: Todo }) { }
}

export class UpdateTodo implements Action {
  readonly type = TodoActionsTypes.UpdateTodo;
  constructor(public payload: { update: Update<Todo> }) { }
}

export class DeleteTodo implements Action {
  readonly type = TodoActionsTypes.DeleteTodo;
  constructor(public payload: { id: string }) { }
}

export class LoadTodos implements Action {
  readonly type = TodoActionsTypes.LoadTodos;
  constructor(public payload: { todos: Todo[] }) { }
}

export type TodoActions =
AddTodo |
UpdateTodo |
DeleteTodo |
LoadTodos;
