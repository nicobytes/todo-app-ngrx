export interface TodosUIState {
  errorLoadingTodos: string | null;
  loadingTodos: boolean;
  errorUpdateTodo: string | null;
  loadingUpdateTodo: boolean;
  errorDeleteTodo: string | null;
  loadingDeleteTodo: boolean;
}
