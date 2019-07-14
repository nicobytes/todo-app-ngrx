import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {

  @Input() countTodos: number;
  @Input() currentFilter: string;

  constructor() {
  }

  ngOnInit() {
  }

  // TODO:
  // clearCompleted() {
  //   const action = new TodoActions.ClearCompletedAction();
  //   this.store.dispatch(action);
  // }

  // TODO
  // completedAll() {
  //   const action = new TodoActions.CompletedAllAction();
  //   this.store.dispatch(action);
  // }

}
