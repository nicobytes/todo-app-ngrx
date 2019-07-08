import { Component, OnInit, Input } from '@angular/core';

// import { AppState } from './../../redux/app.reducer';
// import * as FilterActions from './../../redux/filter/filter.actions';
// import * as TodoActions from './../../redux/todo/todo.actions';
// import { getStateCompleted } from './../../redux/todo/todo.selectors';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  @Input() countTodos: number;
  @Input() currentFilter: string;

  constructor() {
  }

  ngOnInit() {
  }

  clearCompleted() {
    // TODO:
    // const action = new TodoActions.ClearCompletedAction();
    // this.store.dispatch(action);
  }

  completedAll() {
    // const action = new TodoActions.CompletedAllAction();
    // this.store.dispatch(action);
  }

}
