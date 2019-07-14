import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { TodosModuleState } from '@todos/states';
import { DeleteTodoRequest, UpdateTodoRequest } from '@todos/actions';
import { getVisibleTodos, getCountVisibleTodos, getFilter } from '@todos/selectors';
import { Todo } from '@todos/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
// tslint:disable-next-line: component-class-suffix
export class TodoListContainer implements OnInit {

  todos$: Observable<Todo[]>;
  checkField: FormControl;

  constructor(
    private store: Store<TodosModuleState>,
  ) {
    this.checkField = new FormControl(false);
    this.todos$ = this.store.pipe(
      select(getVisibleTodos)
    );
  }

  ngOnInit() {
  }

  // TODO
  // toggleAll() {
  //  this.store.dispatch(new TodoActions.CompletedAllAction());
  // }

  onUpdate(update: Update<Todo>) {
    const action = new UpdateTodoRequest({update});
    this.store.dispatch(action);
  }

  onDelete(id: number) {
    const action = new DeleteTodoRequest({id});
    this.store.dispatch(action);
  }
}
