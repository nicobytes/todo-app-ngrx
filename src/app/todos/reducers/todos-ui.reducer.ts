import { createReducer, on } from '@ngrx/store';
import * as TodoUIActions from '@todos/actions/todos-ui.actions';
import { TodosUIState } from '@todos/states';

export const initialState: TodosUIState = {
  loadingTodos: false,
  errorLoadingTodos: null,
  loadingAddTodo: false,
  errorAddTodo: null,
  loadingUpdateTodo: false,
  errorUpdateTodo: null,
  loadingDeleteTodo: false,
  errorDeleteTodo: null,
};

export const todosUIReducer = createReducer(
  initialState,
  on(TodoUIActions.loadTodosRequest, (state) => {
    return {
      ...state,
      loadingTodos: true,
      errorLoadingTodos: null
    };
  }),
  on(TodoUIActions.loadTodosSuccess, (state) => {
    return {
      ...state,
      loadingTodos: false,
      errorLoadingTodos: null
    };
  }),
  on(TodoUIActions.loadTodosFail, (state, {error}) => {
    return {
      ...state,
      loadingTodos: false,
      errorLoadingTodos: error || null
    };
  }),
  on(TodoUIActions.addTodoRequest, (state) => {
    return {
      ...state,
      loadingAddTodo: true,
      errorAddTodo: null
    };
  }),
  on(TodoUIActions.loadTodosSuccess, (state) => {
    return {
      ...state,
      loadingAddTodo: false,
      errorAddTodo: null
    };
  }),
  on(TodoUIActions.loadTodosFail, (state, {error}) => {
    return {
      ...state,
      loadingAddTodo: false,
      errorAddTodo: error || null
    };
  }),
  on(TodoUIActions.updateTodoRequest, (state) => {
    return {
      ...state,
      loadingUpdateTodo: true,
      errorUpdateTodo: null
    };
  }),
  on(TodoUIActions.updateTodoSuccess, (state) => {
    return {
      ...state,
      loadingUpdateTodo: false,
      errorUpdateTodo: null
    };
  }),
  on(TodoUIActions.addTodoFail, (state, {error}) => {
    return {
      ...state,
      loadingUpdateTodo: false,
      errorUpdateTodo: error || null
    };
  }),
  on(TodoUIActions.deleteTodoRequest, (state) => {
    return {
      ...state,
      loadingDeleteTodo: true,
      errorDeleteTodo: null
    };
  }),
  on(TodoUIActions.deleteTodoSuccess, (state) => {
    return {
      ...state,
      loadingDeleteTodo: false,
      errorDeleteTodo: null
    };
  }),
  on(TodoUIActions.deleteTodoFail, (state, {error}) => {
    return {
      ...state,
      loadingDeleteTodo: false,
      errorDeleteTodo: error || null
    };
  }),
);