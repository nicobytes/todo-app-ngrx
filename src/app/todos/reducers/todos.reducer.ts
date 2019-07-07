import { TodoActionsTypes, TodoActions } from '@todos/actions';
import { TodosState, todosAdapter } from '@todos/states';

export const initialState: TodosState = todosAdapter.getInitialState({
  // additional entity state properties
});

export function todosReducer(
  state = initialState,
  action: TodoActions
) {
  switch (action.type) {
    case TodoActionsTypes.LoadTodos: {
      console.log(action.payload.todos);
      return todosAdapter.addAll(action.payload.todos, state);
    }
    case TodoActionsTypes.AddTodo: {
      return todosAdapter.addOne(action.payload.todo, state);
    }
    case TodoActionsTypes.UpdateTodo: {
      return todosAdapter.updateOne(action.payload.update, state);
    }
    default: {
      return state;
    }
  }
}
