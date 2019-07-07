import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Todo } from '@todos/models';

// import { AppState } from './../../redux/app.reducer';
// import { Todo } from './../../redux/todo/todo.model';
// import * as FilterActions from './../../redux/filter/filter.actions';
// import * as TodoActions from './../../redux/todo/todo.actions';
// import { getVisibleTodos, getStateCompleted } from './../../redux/todo/todo.selectors';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent implements OnInit {

  @Input() todos: Todo[] = [];
  checkField: FormControl;

  constructor() {
    this.checkField = new FormControl();
  }

  ngOnInit() {
  }

  toggleAll() {
    // this.store.dispatch(new TodoActions.CompletedAllAction());
  }

  private setFilter(filter: string) {
    // switch (filter) {
    //   case 'active': {
    //     this.store.dispatch(new FilterActions.SetFilterAction('SHOW_ACTIVE'));
    //     break;
    //   }
    //   case 'completed': {
    //     this.store.dispatch(new FilterActions.SetFilterAction('SHOW_COMPLETED'));
    //     break;
    //   }
    //   default: {
    //     this.store.dispatch(new FilterActions.SetFilterAction('SHOW_ALL'));
    //     break;
    //   }
    // }
  }

  private readTodosState() {
    // this.store.select(getVisibleTodos)
    // .subscribe(todos => {
    //   this.todos = todos;
    // });
  }

  private readStateCompleted() {
    // this.store.select(getStateCompleted)
    // .subscribe(status => {
    //   this.checkField.setValue(status);
    // });
  }

  private readParams() {
    // this.route.params
    // .subscribe(params => {
    //   this.setFilter(params.filter);
    // });
  }
}
