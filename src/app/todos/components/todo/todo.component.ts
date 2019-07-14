import { Component, OnInit, Input, ViewChild, Output, EventEmitter, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Update } from '@ngrx/entity';

import { Todo } from '@todos/models';
import { CustomValidators } from '@app/utils/validators';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent implements OnInit {

  _todo: Todo;

  @Input()
  set todo(todo: Todo) {
    this._todo = todo;
    this.textField.setValue(this._todo.title);
    this.checkField.setValue(this._todo.completed, {emitEvent: false});
  }
  @ViewChild('textInput', { static: true }) textInput: ElementRef;
  textField: FormControl;
  checkField: FormControl;
  editing: boolean;

  @Output() update: EventEmitter<Update<Todo>> = new EventEmitter();
  @Output() delete: EventEmitter<number> = new EventEmitter();

  constructor() {
    this.textField = new FormControl('', [Validators.required, CustomValidators.isBlank]);
    this.checkField = new FormControl(false);
    this.checkField.valueChanges
    .subscribe(state => {
      const update = {
        id: this._todo.id,
        changes: {
          completed: state
        }
      };
      this.update.emit(update);
    });
  }

  ngOnInit() {
  }

  updateText() {
    if (this.textField.valid && this.editing) {
      const update = {
        id: this._todo.id,
        changes: {
          title: this.textField.value
        }
      };
      this.update.emit(update);
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
    this.delete.emit(this._todo.id);
  }

}
