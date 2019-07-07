import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { CustomValidators } from '@utils/validators';

// import { AppState } from './../../redux/app.reducer';
// import * as TodoActions from './../../redux/todo/todo.actions';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html'
})
export class NewTodoComponent implements OnInit {

  textField: FormControl;

  @Output() saveTodo: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.textField = new FormControl('', [Validators.required, CustomValidators.isBlank]);
  }

  ngOnInit() {
  }

  addTodo() {
    if (this.textField.valid) {
      const text: string = this.textField.value;
      this.textField.setValue('', { emitEvent: false });
      this.saveTodo.emit(text);
      // const action = new TodoActions.AddTodoAction(text.trim());
      // this.store.dispatch(action);
    }
  }

}
