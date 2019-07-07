import { TodosState } from './todos.state';
import { TodosUIState } from './todos-ui.state';

export interface TodosModuleState {
  todos: TodosState;
  todosUI: TodosUIState;
}
