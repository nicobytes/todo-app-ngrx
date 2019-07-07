import { TodoUIActionsTypes, TodoUIActions } from '@todos/actions';
import { TodosUIState } from '@todos/states';

export const initialState: TodosUIState = {
  loadingTodos: false,
  errorLoadingTodos: null,
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
    default: {
      return state;
    }
  }
}
