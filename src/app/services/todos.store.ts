import { computed, effect, inject, untracked } from '@angular/core';
import {
  signalStore,
  withState,
  withMethods,
  patchState,
  withComputed,
  withHooks,
} from '@ngrx/signals';

import { Todo, UpdateTodoDto } from '@models/todo.model';
import { Filter } from '@models/filter.model';
import { StorageService } from '@services/storage.service';

interface TodosState {
  todos: Todo[];
  filter: Filter;
}

const initialState: TodosState = {
  todos: [],
  filter: 'all',
};

export const TodosStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed((state) => ({
    visibleTodos: computed(() => {
      const todos = state.todos();
      const filter = state.filter();

      if (filter === 'pending') {
        return todos.filter((todo) => !todo.completed);
      }
      if (filter === 'completed') {
        return todos.filter((todo) => todo.completed);
      }
      return todos;
    }),
    pendingTodos: computed(() => {
      return state.todos().filter((todo) => !todo.completed);
    }),
    completedTodos: computed(() => {
      return state.todos().filter((todo) => todo.completed);
    }),
  })),
  withMethods((store) => ({
    add(title: string): void {
      const newTodo = {
        id: 'id_' + Date.now(),
        title,
        completed: false,
      };
      const todos = store.todos();
      patchState(store, {
        todos: [...todos, newTodo],
      });
    },
    remove(id: string): void {
      const todos = store.todos();
      patchState(store, {
        todos: todos.filter((todo) => todo.id !== id),
      });
    },
    toggle(id: string): void {
      patchState(store, (state) => ({
        todos: state.todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo,
        ),
      }));
    },
    update(id: string, dto: UpdateTodoDto): void {
      patchState(store, (state) => ({
        todos: state.todos.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              ...dto,
            };
          }
          return todo;
        }),
      }));
    },
    changeFilter(change: Filter) {
      patchState(store, { filter: change });
    },
    clearCompleted(): void {
      patchState(store, (state) => ({
        todos: state.todos.filter((todo) => !todo.completed),
      }));
    },
  })),
  withHooks({
    onInit(store) {
      const storage = inject(StorageService);
      patchState(store, { todos: storage.readStorage() });

      // TODO (signalMethod — Caso 1): importar signalMethod desde '@ngrx/signals'
      // TODO (signalMethod — Caso 1): crear persistTodos = signalMethod<Todo[]>((todos) => storage.save(todos))
      // TODO (signalMethod — Caso 1): conectar con persistTodos(store.todos)
      // TODO (signalMethod — Caso 1): eliminar effect + untracked de abajo
      effect(() => {
        const todos = store.todos();

        // untracked: storage.save es un side effect imperativo — no debe re-trackearse.
        // Si aquí leyéramos/escribiéramos otro signal sin untracked, el effect
        // se re-ejecutaría en bucle (implicit tracking).
        untracked(() => {
          storage.save(todos);
        });
      });
    },
  }),
);
