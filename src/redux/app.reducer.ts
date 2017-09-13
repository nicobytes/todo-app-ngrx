import { ActionReducerMap } from '@ngrx/store';

import { TodosReducer } from './todo/todo.reducer';
import { FilterReducer } from './filter/filter.reducer';
import { Todo } from './todo/todo.model';

export interface AppState {
  todos: Todo[];
  filter: string;
}

export const rootReducer: ActionReducerMap<AppState> = {
  todos: TodosReducer,
  filter: FilterReducer
};
