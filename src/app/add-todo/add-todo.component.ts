import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { AppState } from './../app.reducer';
import * as TodoActions from './../todo.actions';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  textField: FormControl;

  constructor(
    private store: Store<AppState>
  ){
    this.textField = new FormControl('', [Validators.required]);
  }

  ngOnInit() {
  }

  saveTodo(){
    if(this.textField.valid){
      const text = this.textField.value;
      this.store.dispatch(new TodoActions.AddTodoAction(text));
      this.textField.setValue('');
    }
  }

}
