import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { TodosModuleState } from '@todos/states';
import { addTodoRequest } from '@todos/actions';
import { getCountVisibleTodos, getFilter } from '@todos/selectors';
import { Todo } from '@todos/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
// tslint:disable-next-line: component-class-suffix
export class LayoutContainer implements OnInit {

  counter$: Observable<number>;
  filter$: Observable<string>;

  constructor(
    private store: Store<TodosModuleState>,
  ) {
    this.counter$ = this.store.pipe(
      select(getCountVisibleTodos)
    );
    this.filter$ = this.store.pipe(
      select(getFilter)
    );
  }

  ngOnInit() {
  }

  onSaveTodo(title: string) {
    const todo: Todo = {
      id: Math.floor(Math.random() * (300 - 200)) + 200,
      title,
      completed: false
    };
    const action = addTodoRequest({todo});
    this.store.dispatch(action);
  }

}
