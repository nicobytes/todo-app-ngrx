import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Todo } from '@todos/models';

// tslint:disable-next-line: no-empty-interface
export interface TodosState extends EntityState<Todo> {
  selectedId: string;
}

export const todosAdapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();

