import { TodoUIActionsTypes, TodoUIActions } from '@todos/actions';
import { TodosUIState } from '@todos/states';

export const initialState: TodosUIState = {
  loadingTodos: false,
  errorLoadingTodos: null,
  loadingUpdateTodo: false,
  errorUpdateTodo: null,
  loadingDeleteTodo: false,
  errorDeleteTodo: null,
};

export function todosUIReducer(
  state = initialState,
  action: TodoUIActions
) {
  switch (action.type) {
    case TodoUIActionsTypes.LoadTodosRequest: {
      return {
        ...state,
        loadingTodos: true,
        errorLoadingTodos: null
      };
    }
    case TodoUIActionsTypes.LoadTodosSuccess: {
      return {
        ...state,
        loadingTodos: false,
        errorLoadingTodos: null
      };
    }
    case TodoUIActionsTypes.LoadTodosFail: {
      return {
        ...state,
        loadingTodos: false,
        errorLoadingTodos: action.payload.error || null
      };
    }
    case TodoUIActionsTypes.UpdateTodoRequest: {
      return {
        ...state,
        loadingUpdateTodo: true,
        errorUpdateTodo: null
      };
    }
    case TodoUIActionsTypes.UpdateTodoSuccess: {
      return {
        ...state,
        loadingUpdateTodo: false,
        errorUpdateTodo: null
      };
    }
    case TodoUIActionsTypes.UpdateTodoFail: {
      return {
        ...state,
        loadingUpdateTodo: false,
        errorUpdateTodo: action.payload.error || null
      };
    }
    case TodoUIActionsTypes.DeleteTodoRequest: {
      return {
        ...state,
        loadingDeleteTodo: true,
        errorDeleteTodo: null
      };
    }
    case TodoUIActionsTypes.DeleteTodoSuccess: {
      return {
        ...state,
        loadingDeleteTodo: false,
        errorDeleteTodo: null
      };
    }
    case TodoUIActionsTypes.DeleteTodoFail: {
      return {
        ...state,
        loadingDeleteTodo: false,
        errorDeleteTodo: action.payload.error || null
      };
    }
    default: {
      return state;
    }
  }
}
