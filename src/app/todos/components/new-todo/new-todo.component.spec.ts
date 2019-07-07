import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StoreModule, Store } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';

import { rootReducer, AppState } from './../../redux/app.reducer';
import * as TodoActions from './../../redux/todo/todo.actions';

import { NewTodoComponent } from './new-todo.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'blank-cmp',
  template: ``
})
// tslint:disable-next-line:component-class-suffix
export class BlankCmp {
}

describe('NewTodoComponent', () => {
  let component: NewTodoComponent;
  let fixture: ComponentFixture<NewTodoComponent>;
  let store: Store<AppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        NewTodoComponent,
        BlankCmp
      ],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule.withRoutes([
          {path: '', component: BlankCmp}
        ]),
        StoreModule.forRoot(rootReducer),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {

    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();

    fixture = TestBed.createComponent(NewTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('Test for textField', () => {

    it('should textField be defined', () => {
      expect(component.textField).toBeDefined();
    });

    it('should textField be valid', () => {
      component.textField.setValue('new todo');
      expect(component.textField.valid).toBeTruthy();
    });

    it('should textField be invalid', () => {
      component.textField.setValue('');
      expect(component.textField.invalid).toBeTruthy();
    });

  });

  describe('Test for saveTodo', () => {

    it('should dispatch an action', () => {
      component.textField.setValue('new todo', {emitEvent: false});
      component.saveTodo();
      expect(store.dispatch).toHaveBeenCalled();
    });

    it('should set value of textField in empty', () => {
      component.textField.setValue('new todo', {emitEvent: false});
      component.saveTodo();
      expect(component.textField.value).toEqual('');
    });

  });
});
