import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from './app.reducer';
import * as TodoActions from './todo.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private store: Store<AppState>
  ) {
    this.run();
  }

  private run() {
    setTimeout(() => {
      this.store.dispatch(new TodoActions.AddTodoAction('nueva tarea'));
    }, 2000);
  }
}
