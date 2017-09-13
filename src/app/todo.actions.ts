import { Action } from '@ngrx/store';

export const ADD_TODO    = '[TODO] add';
export const DELETE_TODO = '[TODO] delete';
export const TOGGLE_TODO = '[TODO] toggle';
export const UPDATE_TODO = '[TODO] update';
export const CLEAR_COMPLETED_TODO = '[TODO] clear completed';
export const COMPLETE_ALL_TODO = '[TODO] complete all';

export class AddTodoAction implements Action {
  readonly type = ADD_TODO;
  public id: number;

  constructor(
    public text: string
  ){ 
    this.id = Math.random();
  }
}

export class DeleteTodoAction implements Action {
  readonly type = DELETE_TODO;

  constructor(
    public id: number
  ){}
}

export class ToggleAction implements Action {
  readonly type = TOGGLE_TODO;

  constructor(
    public id: number
  ){ }
}

export class UpdateAction implements Action {
  readonly type = UPDATE_TODO;

  constructor(
    public id: number,
    public text: string,
  ){ }
}

export class ClearCompletedAction implements Action {
  readonly type = CLEAR_COMPLETED_TODO;
}

export class CompletedAllAction implements Action {
  readonly type = COMPLETE_ALL_TODO;
}

export type TodoActionType =
AddTodoAction |
ToggleAction |
DeleteTodoAction |
UpdateAction |
ClearCompletedAction |
CompletedAllAction;
