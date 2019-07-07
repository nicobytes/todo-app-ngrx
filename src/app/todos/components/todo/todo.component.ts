import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Todo } from '@todos/models';

// import { AppState } from './../../redux/app.reducer';
// import { Todo } from './../../redux/todo/todo.model';
// import * as TodoActions from './../../redux/todo/todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html'
})
export class TodoComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('textInput', { static: true }) textInput: ElementRef;
  textField: FormControl;
  checkField: FormControl;
  editing: boolean;

  constructor() {
    this.textField = new FormControl('', [Validators.required]);
    this.checkField = new FormControl(false);
    this.checkField.valueChanges
    .subscribe(state => {
      // const action = new TodoActions.ToggleAction(this.todo.id);
      // this.store.dispatch(action);
    });
  }

  ngOnInit() {
    this.textField.setValue(this.todo.title);
    this.checkField.setValue(this.todo.completed, {emitEvent: false});
  }

  updateText() {
    if (this.textField.valid && this.editing) {
      const id = this.todo.id;
      const newText: string = this.textField.value;
      // const action = new TodoActions.UpdateAction(id, newText.trim());
      // this.store.dispatch(action);
      this.editing = false;
    }
  }

  activeEditMode() {
    this.editing = true;
    setTimeout(() => {
      this.textInput.nativeElement.focus();
    });
  }

  deleteTodo() {
    const id = this.todo.id;
    // const action = new TodoActions.DeleteTodoAction(id);
    // this.store.dispatch(action);
  }

}
