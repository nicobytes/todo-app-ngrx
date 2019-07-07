import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { TodosModuleState } from '@todos/states';
import { AddTodoRequest } from '@todos/actions';
import { getVisibleTodos } from '@todos/selectors';
import { Todo } from '@todos/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.container.html',
})
// tslint:disable-next-line: component-class-suffix
export class LayoutContainer implements OnInit {

  todos$: Observable<Todo[]>;

  constructor(
    private store: Store<TodosModuleState>,
  ) {
    this.todos$ = this.store.pipe(
      select(getVisibleTodos)
    );
  }

  ngOnInit() {
  }

  onSaveTodo(title: string) {
    const todo: Todo = {
      title,
      completed: false
    };
    const action = new AddTodoRequest({todo});
    this.store.dispatch(action);
  }

}
