import { createReducer, on } from '@ngrx/store';
import * as TodoActions from '@todos/actions/todos.actions';
import { TodosState, todosAdapter } from '@todos/states';

export const initialState: TodosState = todosAdapter.getInitialState({
  // additional entity state properties
});

export const todosReducer = createReducer(
  initialState,
  on(TodoActions.loadTodos, (state, {todos}) => {
    return todosAdapter.setAll(todos, state);
  }),
  on(TodoActions.addTodo, (state, {todo}) => {
    return todosAdapter.addOne(todo, state);
  }),
  on(TodoActions.updateTodo, (state, {update}) => {
    return todosAdapter.updateOne(update, state);
  }),
  on(TodoActions.deleteTodo, (state, {id}) => {
    return todosAdapter.removeOne(id, state);
  }),
);
