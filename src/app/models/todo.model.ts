export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export type CreateTodoDto = Omit<Todo, 'id'>;
export type UpdateTodoDto = Partial<CreateTodoDto>;
