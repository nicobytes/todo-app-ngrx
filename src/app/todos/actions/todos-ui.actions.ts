import { Action } from '@ngrx/store';

import { Todo } from '@todos/models';

export enum TodoUIActionsTypes {
  LoadTodosRequest = '[TodoModule] LoadTodosRequest',
  LoadTodosSuccess = '[TodoModule] LoadTodosSuccess',
  LoadTodosFail    = '[TodoModule] LoadTodosFail',
  AddTodoRequest   = '[TodoModule] AddTodoRequest',
  AddTodoSuccess   = '[TodoModule] AddTodoSuccess',
  AddTodoFail      = '[TodoModule] AddTodoTodosFail',
}

export class LoadTodosRequest implements Action {
  readonly type = TodoUIActionsTypes.LoadTodosRequest;
}

export class LoadTodosSuccess implements Action {
  readonly type = TodoUIActionsTypes.LoadTodosSuccess;
}

export class LoadTodosFail implements Action {
  readonly type = TodoUIActionsTypes.LoadTodosFail;
  constructor(public payload: { error: string }) { }
}

export class AddTodoRequest implements Action {
  readonly type = TodoUIActionsTypes.AddTodoRequest;
  constructor(public payload: { todo: Todo }) { }
}

export class AddTodoSuccess implements Action {
  readonly type = TodoUIActionsTypes.AddTodoSuccess;
}

export class AddTodoFail implements Action {
  readonly type = TodoUIActionsTypes.AddTodoFail;
  constructor(public payload: { error: string }) { }
}

export type TodoUIActions =
LoadTodosRequest |
LoadTodosSuccess |
LoadTodosFail |
AddTodoRequest |
AddTodoSuccess |
AddTodoFail;
