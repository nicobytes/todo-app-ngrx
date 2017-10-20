import { createSelector } from '@ngrx/store';
import { AppState } from './../app.reducer';
import { Todo } from './todo.model';

export const getState  = (state: AppState) => state;
export const getFilter = (state: AppState) => state.filter;
export const getTodos  = (state: AppState) => state.todos;

export const getVisibleTodos = createSelector(
  getTodos,
  getFilter,
  (todos: Todo[], filter: string) => {
    switch (filter) {
      default:
      case 'SHOW_ALL':
        return todos;
      case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed);
      case 'SHOW_ACTIVE':
        return todos.filter(t => !t.completed);
    }
  }
);

export const getStateCompleted = createSelector(getTodos, (todos) => {
  return todos.every(todo => todo.completed);
});
