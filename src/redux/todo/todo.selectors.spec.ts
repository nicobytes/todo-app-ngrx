import * as TodoSelectors from './todo.selectors';

describe('Redux: TodoSelectors', () => {

  describe('Test for getState', () => {

    it('should return the state', () => {
      const state = {
        todos: [],
        filter: ''
      };
      const rta = TodoSelectors.getState(state);
      expect(rta).toEqual(state);
    });

  });

  describe('Test for getTodos', () => {

    it('should return the todos', () => {
      const state = {
        todos: [],
        filter: ''
      };
      const rta = TodoSelectors.getTodos(state);
      expect(rta).toEqual(state.todos);
    });

  });

  describe('Test for getVisibleTodos', () => {

    it('should return the all todos with fitler "SHOW_ALL"', () => {
      const state = {
        todos: [
          { id: 1, text: 'todo', completed: false },
          { id: 2, text: 'todo', completed: true },
          { id: 3, text: 'todo', completed: false },
        ],
        filter: 'SHOW_ALL'
      };
      const todos = TodoSelectors.getVisibleTodos(state);
      expect(todos.length).toEqual(3);
    });

    it('should return the completed todos with fitler "SHOW_COMPLETED"', () => {
      const state = {
        todos: [
          { id: 1, text: 'todo', completed: false },
          { id: 2, text: 'todo', completed: true },
          { id: 3, text: 'todo', completed: false },
        ],
        filter: 'SHOW_COMPLETED'
      };
      const todos = TodoSelectors.getVisibleTodos(state);
      expect(todos.length).toEqual(1);
    });

    it('should return the undone todos with fitler "SHOW_ACTIVE"', () => {
      const state = {
        todos: [
          { id: 1, text: 'todo', completed: false },
          { id: 2, text: 'todo', completed: true },
          { id: 3, text: 'todo', completed: false },
        ],
        filter: 'SHOW_ACTIVE'
      };
      const todos = TodoSelectors.getVisibleTodos(state);
      expect(todos.length).toEqual(2);
    });

    it('should return the all todos with unknown fitler ', () => {
      const state = {
        todos: [
          { id: 1, text: 'todo', completed: false },
          { id: 2, text: 'todo', completed: true },
          { id: 3, text: 'todo', completed: false },
        ],
        filter: ''
      };
      const todos = TodoSelectors.getVisibleTodos(state);
      expect(todos.length).toEqual(3);
    });

  });

  describe('Test for getStateCompleted', () => {

    it('should return false if one todo is undone', () => {
      const state = {
        todos: [
          { id: 1, text: 'todo', completed: false },
          { id: 2, text: 'todo', completed: true },
          { id: 3, text: 'todo', completed: false },
        ],
        filter: 'SHOW_ALL'
      };
      const rta = TodoSelectors.getStateCompleted(state);
      expect(rta).toBeFalsy();
    });

    it('should return true if all todos is done', () => {
      const state = {
        todos: [
          { id: 1, text: 'todo', completed: true },
          { id: 2, text: 'todo', completed: true },
          { id: 3, text: 'todo', completed: true },
        ],
        filter: 'SHOW_ALL'
      };
      const rta = TodoSelectors.getStateCompleted(state);
      expect(rta).toBeTruthy();
    });

  });

});
