import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTodoComponent } from './new-todo.component';

describe('NewTodoComponent', () => {
  let component: NewTodoComponent;
  let fixture: ComponentFixture<NewTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
