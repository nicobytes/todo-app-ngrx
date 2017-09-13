import { ActionReducerMap } from '@ngrx/store';

import { TodosReducer } from './todo.reducer';
import { FilterReducer } from './filter.reducer';
import { Todo } from './todo.model';

export interface AppState {
  todos: Todo[];
  filter: string;
}

export const rootReducer: ActionReducerMap<AppState> = {
  todos: TodosReducer,
  filter: FilterReducer
};
