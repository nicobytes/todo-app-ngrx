export interface TodosUIState {
  errorLoadingTodos: string | null;
  loadingTodos: boolean;
  errorAddTodo: string | null;
  loadingAddTodo: boolean;
  errorUpdateTodo: string | null;
  loadingUpdateTodo: boolean;
  errorDeleteTodo: string | null;
  loadingDeleteTodo: boolean;
}
