import { Action } from '@ngrx/store';

export const SET_FILTER  = '[SET] filter';

export class SetFilterAction implements Action {
  readonly type = SET_FILTER;

  constructor(
    public filter: string
  ) {}
}
