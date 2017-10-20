import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule, Store } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';

import { rootReducer, AppState } from './../../redux/app.reducer';
import * as FilterActions from './../../redux/filter/filter.actions';
import * as TodoActions from './../../redux/todo/todo.actions';

import { FooterComponent } from './footer.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'blank-cmp',
  template: ``
})
// tslint:disable-next-line:component-class-suffix
export class BlankCmp {
}

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let store: Store<AppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FooterComponent,
        BlankCmp
      ],
      imports: [
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

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('Test for clearCompleted', () => {

    it('should dispatch an action', () => {
      component.clearCompleted();
      const action = new TodoActions.ClearCompletedAction();
      expect(store.dispatch).toHaveBeenCalledWith(action);
    });

  });

  describe('Test for completedAll', () => {

    it('should dispatch an action', () => {
      component.completedAll();
      const action = new TodoActions.CompletedAllAction();
      expect(store.dispatch).toHaveBeenCalledWith(action);
    });

  });

  describe('Test for countTodos', () => {

    it('should return 2 undone todos and showFooter is true', () => {
      const todos = [
        { id: 1, text: 'todo', completed: false },
        { id: 2, text: 'todo', completed: true },
        { id: 3, text: 'todo', completed: false },
      ];
      const action = new TodoActions.PopulateTodosAction(todos);
      store.dispatch(action);
      fixture.detectChanges();
      expect(component.countTodos).toEqual(2);
      expect(component.showFooter).toBeTruthy();
    });

    it('should return 0 undone todos and showFooter is false', () => {
      const todos = [];
      const action = new TodoActions.PopulateTodosAction(todos);
      store.dispatch(action);
      fixture.detectChanges();
      expect(component.countTodos).toEqual(0);
      expect(component.showFooter).toBeFalsy();
    });

  });

  describe('Test for currentFilter', () => {

    it('should currentFilter be "SHOW_ALL"', () => {
      const action = new FilterActions.SetFilterAction('SHOW_ALL');
      store.dispatch(action);
      fixture.detectChanges();
      expect(component.currentFilter).toEqual('SHOW_ALL');
    });

  });
});
