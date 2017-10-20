import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StoreModule, Store } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { rootReducer, AppState } from './../../redux/app.reducer';
import * as TodoActions from './../../redux/todo/todo.actions';
import * as FilterActions from './../../redux/filter/filter.actions';

import { TodoListComponent } from './todo-list.component';
import { TodoComponent } from './../todo/todo.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'blank-cmp',
  template: ``
})
// tslint:disable-next-line:component-class-suffix
export class BlankCmp {
}

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  let store: Store<AppState>;
  let route: ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TodoListComponent,
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

    route = TestBed.get(ActivatedRoute);

    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('Test for checkField', () => {

    it('should checkField be defined', () => {
      expect(component.checkField).toBeDefined();
    });

    it('should checkField be true with new stateCompleted', () => {
      const todos = [
        { id: 1, text: 'todo', completed: true },
        { id: 2, text: 'todo', completed: true },
        { id: 3, text: 'todo', completed: true },
      ];
      const action = new TodoActions.PopulateTodosAction(todos);
      store.dispatch(action);
      expect(component.checkField.value).toBeTruthy();
    });

    it('should checkField be false with new readStateCompleted', () => {
      const todos = [
        { id: 1, text: 'todo', completed: true },
        { id: 2, text: 'todo', completed: false },
        { id: 3, text: 'todo', completed: true },
      ];
      const action = new TodoActions.PopulateTodosAction(todos);
      store.dispatch(action);
      expect(component.checkField.value).toBeFalsy();
    });

  });

  describe('Test for toggleAll', () => {

    it('should dispatch an action', () => {
      component.toggleAll();
      const action = new TodoActions.CompletedAllAction();
      expect(store.dispatch).toHaveBeenCalledWith(action);
    });

  });

  describe('Test for readTodosState', () => {

    it('should todos be equal that new todos', () => {
      const todos = [
        { id: 1, text: 'todo', completed: true },
        { id: 2, text: 'todo', completed: false },
        { id: 3, text: 'todo', completed: true },
      ];
      const action = new TodoActions.PopulateTodosAction(todos);
      store.dispatch(action);
      expect(component.todos).toEqual(todos);
    });

  });

  describe('Test for readParams', () => {

    it('should dispatch an action when filter is unknown', () => {

      route = TestBed.get(ActivatedRoute);
      route.params = Observable.of({
        'filter': 'what'
      });

      fixture = TestBed.createComponent(TodoListComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();

      const action = new FilterActions.SetFilterAction('SHOW_ALL');
      expect(store.dispatch).toHaveBeenCalledWith(action);
    });

    it('should dispatch an action when filter is "active"', () => {

      route = TestBed.get(ActivatedRoute);
      route.params = Observable.of({
        'filter': 'active'
      });

      fixture = TestBed.createComponent(TodoListComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();

      const action = new FilterActions.SetFilterAction('SHOW_ACTIVE');
      expect(store.dispatch).toHaveBeenCalledWith(action);
    });

    it('should dispatch an action when filter is "completed"', () => {

      route = TestBed.get(ActivatedRoute);
      route.params = Observable.of({
        'filter': 'completed'
      });

      fixture = TestBed.createComponent(TodoListComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();

      const action = new FilterActions.SetFilterAction('SHOW_COMPLETED');
      expect(store.dispatch).toHaveBeenCalledWith(action);
    });

  });
});
