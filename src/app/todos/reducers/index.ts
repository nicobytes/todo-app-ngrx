import {
  ActionReducerMap,
  createFeatureSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '@environments/environment';

import { TodosModuleState } from '@todos/states';

import { todosReducer } from './todos.reducer';
import { todosUIReducer } from './todos-ui.reducer';

export const reducers: ActionReducerMap<TodosModuleState> = {
  todos: todosReducer,
  todosUI: todosUIReducer
};

export const metaReducers: MetaReducer<TodosModuleState>[] = !environment.production ? [] : [];

export const getTodosModuleState = createFeatureSelector<TodosModuleState>(
  'todos-module'
);
