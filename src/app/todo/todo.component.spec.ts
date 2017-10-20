import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StoreModule, Store } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';

import { rootReducer, AppState } from './../../redux/app.reducer';
import * as TodoActions from './../../redux/todo/todo.actions';

import { TodoComponent } from './todo.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'blank-cmp',
  template: ``
})
// tslint:disable-next-line:component-class-suffix
export class BlankCmp {
}


describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;
  let store: Store<AppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TodoComponent,
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

    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    component.todo = {
      id: 1,
      text: 'test todo',
      completed: true
    };
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

  describe('Test for checkField', () => {

    it('should checkField be define', () => {
      expect(component.checkField).toBeDefined();
    });

    it('should dispatch an action when checkField change state', () => {
      component.checkField.setValue(true);
      const action = new TodoActions.ToggleAction(component.todo.id);
      expect(store.dispatch).toHaveBeenCalledWith(action);
    });

  });

  describe('Test for updateText', () => {

    it('should dispatch an action if textField is valid and editing is true', () => {
      component.editing = true;
      component.textField.setValue('update todo', { emitEvent: false });
      component.updateText();
      const action = new TodoActions.UpdateAction(component.todo.id, component.textField.value);
      expect(store.dispatch).toHaveBeenCalledWith(action);
    });

    it('should editing be false after send dispatch', () => {
      component.editing = true;
      component.textField.setValue('update todo', { emitEvent: false });
      component.updateText();
      expect(component.editing).toBeFalsy();
    });

  });

  describe('Test for activeEditMode', () => {

    it('should editing be true', () => {
      component.activeEditMode();
      expect(component.editing).toBeTruthy();
    });

    it('should textInput call focus', fakeAsync(() => {
      spyOn(component.textInput.nativeElement, 'focus').and.callThrough();
      component.activeEditMode();
      tick(1000);
      expect(component.textInput.nativeElement.focus).toHaveBeenCalled();
    }));

  });

  describe('Test for deleteTodo', () => {

    it('should dispatch an action', () => {
      component.deleteTodo();
      const action = new TodoActions.DeleteTodoAction(component.todo.id);
      expect(store.dispatch).toHaveBeenCalledWith(action);
    });

  });
});
