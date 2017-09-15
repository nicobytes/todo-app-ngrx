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
    this.readFilterState();
    this.readTodosState();
  }

  ngOnInit() {
  }

  clearCompleted() {
    const action = new TodoActions.ClearCompletedAction();
    this.store.dispatch(action);
  }

  completedAll() {
    const action = new TodoActions.CompletedAllAction();
    this.store.dispatch(action);
  }

  private readTodosState() {
    this.store.select('todos')
    .subscribe(todos => {
      this.countTodos = todos.filter(t => !t.completed).length;
      this.showFooter = todos.length > 0;
    });
  }

  private readFilterState() {
    this.store.select('filter')
    .subscribe(fitler => {
      this.currentFilter = fitler;
    });
  }

}
