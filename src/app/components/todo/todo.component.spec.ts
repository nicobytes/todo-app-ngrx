/// <reference types="jasmine" />

import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';

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

  describe('effect (Fase 1 — código actual)', () => {
    it('should sync title when todo input changes', fakeAsync(() => {
      fixture.componentRef.setInput('todo', { id: '1', title: 'Updated', completed: false });
      TestBed.tick();

      expect(component.titleControl.value).toBe('Updated');
      expect(component.syncCount()).toBeGreaterThan(0);
    }));
  });

  /*
   * TODO (signalMethod — Fase 2): reemplazar el describe de arriba por estos tests
   * cuando migres effect → signalMethod en todo.component.ts
   *
   * it('should sync title when syncTitle is called directly', () => {
   *   component['syncTitle']({ id: '1', title: 'Test title', completed: false });
   *   expect(component.titleControl.value).toBe('Test title');
   *   expect(component.syncCount()).toBe(1);
   *   // Sin TestBed.tick() — invocación directa
   * });
   */
});
