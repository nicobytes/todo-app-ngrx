import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from './../app.reducer';
import * as FilterActions from './../filter.actions';
import * as TodoActions from './../todo.actions';
import { getCountTodos, getStateCompleted } from './../todo.selectors';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  countTodos: number;
  stateCompleted: boolean;
  currentFilter: string;

  constructor(
    private store: Store<AppState>
  ) {
    this.store.select(getCountTodos)
    .subscribe(count => {
      this.countTodos = count;
    });
    this.store.select(getStateCompleted)
    .subscribe(state => {
      this.stateCompleted = state;
    });
    this.store.select('filter')
    .subscribe(fitler => {
      this.currentFilter = fitler;
    });

  }

  ngOnInit() {
  }

  showAll() {
    this.store.dispatch(new FilterActions.SetFilterAction('SHOW_ALL'));
  }

  showActive() {
    this.store.dispatch(new FilterActions.SetFilterAction('SHOW_ACTIVE'));
  }

  showCompleted() {
    this.store.dispatch(new FilterActions.SetFilterAction('SHOW_COMPLETED'));
  }

  clearCompleted() {
    this.store.dispatch(new TodoActions.ClearCompletedAction());
  }

  completedAll() {
    this.store.dispatch(new TodoActions.CompletedAllAction());
  }

}
