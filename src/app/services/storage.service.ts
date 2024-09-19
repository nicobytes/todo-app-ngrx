import { Injectable } from '@angular/core';
import { Todo } from '@models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private localStorageKey = 'mydayapp-angular';

  constructor() {}

  save(todos: Todo[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(todos));
  }

  readStorage() {
    return JSON.parse(
      localStorage.getItem(this.localStorageKey) || '[]'
    );
  }
}
