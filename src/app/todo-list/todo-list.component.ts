import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppState } from './../app.reducer';
import { Todo } from './../todo.model';
import * as FilterActions from './../filter.actions';
import * as TodoActions from './../todo.actions';
import { getVisibleTodos, getStateCompleted } from './../todo.selectors';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  checkField: FormControl;

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute
  ) {
    this.route.params
    .subscribe(params => {
      this.setFilter(params.filter);
    });
    this.checkField = new FormControl();
    this.store.select(getStateCompleted)
    .subscribe(status => {
      this.checkField.setValue(status);
    });
    this.readTodosState();
  }

  ngOnInit() {
  }

  readTodosState() {
    this.store.select(getVisibleTodos)
    .subscribe(todos => {
      this.todos = todos;
    });
  }

  toggleAll() {
    this.store.dispatch(new TodoActions.CompletedAllAction());
  }

  private setFilter(filter: string) {
    switch (filter) {
      case 'active': {
        this.store.dispatch(new FilterActions.SetFilterAction('SHOW_ACTIVE'));
        break;
      }
      case 'completed': {
        this.store.dispatch(new FilterActions.SetFilterAction('SHOW_COMPLETED'));
        break;
      }
      default: {
        this.store.dispatch(new FilterActions.SetFilterAction('SHOW_ALL'));
        break;
      }
    }
  }
}
