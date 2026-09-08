/// <reference types="jasmine" />

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Todo } from '../../models/todo.model';
import { TodoComponent } from './todo.component';
import { StorageService } from '../../services/storage.service';

describe('TodoComponent', () => {
  let fixture: ComponentFixture<TodoComponent>;
  let component: TodoComponent;
  let storageMock: jasmine.SpyObj<Pick<StorageService, 'readStorage' | 'save'>>;

  beforeEach(async () => {
    storageMock = jasmine.createSpyObj('StorageService', ['readStorage', 'save']);
    storageMock.readStorage.and.returnValue([] as Todo[]);

    await TestBed.configureTestingModule({
      imports: [TodoComponent],
      providers: [{ provide: StorageService, useValue: storageMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
  });

  describe('signalMethod syncTitle (Fase 2)', () => {
    it('should sync title when syncTitle is called directly', () => {
      component['syncTitle']({ id: '1', title: 'Test title', completed: false });

      expect(component.titleControl.value).toBe('Test title');
      expect(component.syncCount()).toBe(1);
    });
  });
});
