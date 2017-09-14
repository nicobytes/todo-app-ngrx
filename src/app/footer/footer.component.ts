import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from './../../redux/app.reducer';
import * as FilterActions from './../../redux/filter/filter.actions';
import * as TodoActions from './../../redux/todo/todo.actions';
import { getStateCompleted } from './../../redux/todo/todo.selectors';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  countTodos: number;
  currentFilter: string;
  showFooter: boolean;

  constructor(
    private store: Store<AppState>
  ) {
    this.store.select('todos')
    .subscribe(todos => {
      this.countTodos = todos.filter(t => !t.completed).length;
      this.showFooter = todos.length > 0;
    });
    this.store.select('filter')
    .subscribe(fitler => {
      this.currentFilter = fitler;
    });
  }

  ngOnInit() {
  }

  clearCompleted() {
    this.store.dispatch(new TodoActions.ClearCompletedAction());
  }

  completedAll() {
    this.store.dispatch(new TodoActions.CompletedAllAction());
  }

}
