import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Todo } from '@todos/models';

export enum TodoUIActionsTypes {
  LoadTodosRequest   = '[TodoModule] LoadTodosRequest',
  LoadTodosSuccess   = '[TodoModule] LoadTodosSuccess',
  LoadTodosFail      = '[TodoModule] LoadTodosFail',
  AddTodoRequest     = '[TodoModule] AddTodoRequest',
  AddTodoSuccess     = '[TodoModule] AddTodoSuccess',
  AddTodoFail        = '[TodoModule] AddTodoTodosFail',
  UpdateTodoRequest  = '[TodoModule] UpdateTodoRequest',
  UpdateTodoSuccess  = '[TodoModule] UpdateTodoSuccess',
  UpdateTodoFail     = '[TodoModule] UpdateTodoFail',
  DeleteTodoRequest  = '[TodoModule] DeleteTodoRequest',
  DeleteTodoSuccess  = '[TodoModule] DeleteTodoSuccess',
  DeleteTodoFail     = '[TodoModule] DeleteTodoFail',
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

export class UpdateTodoRequest implements Action {
  readonly type = TodoUIActionsTypes.UpdateTodoRequest;
  constructor(public payload: { update: Update<Todo> }) { }
}

export class UpdateTodoSuccess implements Action {
  readonly type = TodoUIActionsTypes.UpdateTodoSuccess;
}

export class UpdateTodoFail implements Action {
  readonly type = TodoUIActionsTypes.UpdateTodoFail;
  constructor(public payload: { error: string }) { }
}

export class DeleteTodoRequest implements Action {
  readonly type = TodoUIActionsTypes.DeleteTodoRequest;
  constructor(public payload: { id: number }) { }
}

export class DeleteTodoSuccess implements Action {
  readonly type = TodoUIActionsTypes.DeleteTodoSuccess;
}

export class DeleteTodoFail implements Action {
  readonly type = TodoUIActionsTypes.DeleteTodoFail;
  constructor(public payload: { error: string }) { }
}

export type TodoUIActions =
LoadTodosRequest |
LoadTodosSuccess |
LoadTodosFail |
AddTodoRequest |
AddTodoSuccess |
AddTodoFail |
UpdateTodoRequest |
UpdateTodoSuccess |
UpdateTodoFail |
DeleteTodoRequest |
DeleteTodoSuccess |
DeleteTodoFail;
