import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from './../redux/app.reducer';
import { Todo } from './../redux/todo/todo.model';
import * as TodoActions from './../redux/todo/todo.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(
    private store: Store<AppState>,
  ) {
    this.populateTodos();
    this.updateTodos();
  }

  private populateTodos() {
    const todos: Todo[] = JSON.parse(localStorage.getItem('angular-ngrx-todos') || '[]');
    this.store.dispatch(new TodoActions.PopulateTodosAction(todos));
  }

  private updateTodos() {
    this.store.select('todos')
    .subscribe(todos => {
      localStorage.setItem('angular-ngrx-todos', JSON.stringify(todos));
    });
  }

}
