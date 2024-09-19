import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Todo, UpdateTodoDto } from '@models/todo.model';
import { Filter } from '@models/filter.model';
import { StorageService } from '@services/storage.service';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [];
  private todosBS = new BehaviorSubject<Todo[]>(this.todos);

  private filter: Filter = 'all';
  private filterBS = new BehaviorSubject<Filter>(this.filter);

  constructor(private storage: StorageService) {}

  getTodos() {
    return this.todosBS.asObservable();
  }

  getTodosByFilter() {
    return this.getTodos().pipe(
      map((todos) => {
        if (this.filter === 'pending') {
          return todos.filter((todo) => !todo.completed);
        }
        if (this.filter === 'completed') {
          return todos.filter((todo) => todo.completed);
        }
        return todos;
      })
    );
  }

  getPendingTodos() {
    return this.getTodos().pipe(
      map((todos) => todos.filter((todo) => !todo.completed))
    );
  }

  getCompletedTodos() {
    return this.getTodos().pipe(
      map((todos) => todos.filter((todo) => todo.completed))
    );
  }

  readStorage() {
    this.todos = this.storage.readStorage();
    this.save();
  }

  add(title: string): void {
    const newTodo = {
      id: 'id_' + Date.now(),
      title,
      completed: false,
    };
    this.todos = [...this.todos, newTodo];
    this.save();
  }

  remove(id: Todo['id']): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.save();
  }

  toggle(id: Todo['id']): void {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    this.save();
  }

  clearCompleted(): void {
    this.todos = this.todos.filter((todo) => !todo.completed);
    this.save();
  }

  update(id: Todo['id'], dto: UpdateTodoDto): void {
    this.todos = this.todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          ...dto,
        };
      }
      return todo;
    });
    this.save();
  }

  private save(): void {
    this.todosBS.next(this.todos);
    this.storage.save(this.todos);
  }

  changeFilter(change: Filter) {
    this.filter = change;
    this.filterBS.next(change);
    this.todosBS.next(this.todos);
  }

  getFilter() {
    return this.filterBS.asObservable();
  }
}
