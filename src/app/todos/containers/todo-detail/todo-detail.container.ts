import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';

import { TodosModuleState } from '@todos/states';
import { getTodo } from '@todos/selectors';
import { selectTodo } from '@todos/actions';
import { Todo } from '@todos/models';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
// tslint:disable-next-line: component-class-suffix
export class TodoDetailContainer implements OnInit {

  todo$: Observable<Todo>;

  constructor(
    private store: Store<TodosModuleState>,
    private activatedRoute: ActivatedRoute
  ) {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    const action = selectTodo({id});
    this.store.dispatch(action);

    this.todo$ = this.store.pipe(
      select(getTodo),
      filter(todo => !!todo)
    );
  }

  ngOnInit() {
  }

}
