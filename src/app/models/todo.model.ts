export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export interface CreateTodoDto extends Omit<Todo, 'id'> {}
export interface UpdateTodoDto extends Partial<CreateTodoDto> {}
