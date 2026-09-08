/// <reference types="jasmine" />

import { fakeAsync, TestBed } from '@angular/core/testing';

import { Todo } from '../models/todo.model';
import { TodosStore } from './todos.store';
import { StorageService } from './storage.service';

describe('TodosStore', () => {
  let store: InstanceType<typeof TodosStore>;
  let storage: StorageService;
  let saveSpy: jasmine.Spy<(todos: Todo[]) => void>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    storage = TestBed.inject(StorageService);
    spyOn(storage, 'readStorage').and.returnValue([]);
    saveSpy = spyOn(storage, 'save');
    store = TestBed.inject(TodosStore);
    saveSpy.calls.reset();
  });

  describe('signalMethod persist (Fase 2)', () => {
    it('should persist todos when add is called', fakeAsync(() => {
      store.add('Buy milk');
      TestBed.tick();

      expect(saveSpy).toHaveBeenCalled();
      const savedTodos = saveSpy.calls.mostRecent().args[0];
      expect(savedTodos.some((todo) => todo.title === 'Buy milk')).toBeTrue();
    }));

    it('should persist todos when toggle is called', fakeAsync(() => {
      store.add('Buy milk');
      TestBed.tick();
      saveSpy.calls.reset();

      store.toggle(store.todos()[0].id);
      TestBed.tick();

      expect(saveSpy).toHaveBeenCalled();
      const savedTodos = saveSpy.calls.mostRecent().args[0];
      expect(savedTodos[0].completed).toBeTrue();
    }));

    it('should load todos from storage on init', () => {
      expect(storage.readStorage).toHaveBeenCalled();
      expect(store.todos()).toEqual([]);
    });
  });

});
