import * as TodoActions from './todo.actions';
import { TodosReducer } from './todo.reducer';

describe('Redux: TodosReducer', () => {

  it('should return a new state with new todo: AddTodoAction', () => {
    const action = new TodoActions.AddTodoAction('new todo');
    const oldState = [{ id: 1, text: 'todo', completed: false }];
    const newState = TodosReducer(oldState, action);
    expect(newState.length).toEqual(2);
    expect(newState[1].text).toEqual('new todo');
  });

  it('should return a new state with new todos: PopulateTodosAction', () => {
    const newTodos = [{ id: 2, text: 'new todo', completed: true }];
    const action = new TodoActions.PopulateTodosAction(newTodos);
    const oldState = [{ id: 1, text: 'todo', completed: false }];
    const newState = TodosReducer(oldState, action);
    expect(newState.length).toEqual(1);
    expect(newState[0].text).toEqual('new todo');
  });

  it('should return a new state with new todos: ToggleAction', () => {
    const action = new TodoActions.ToggleAction(1);
    const oldState = [
      { id: 1, text: 'todo', completed: false },
      { id: 2, text: 'todo', completed: false }
    ];
    const newState = TodosReducer(oldState, action);
    expect(newState.length).toEqual(2);
    expect(newState[0].completed).toBeTruthy();
    expect(newState[1].completed).toBeFalsy();
  });

  it('should return a new state with new todos: DeleteTodoAction', () => {
    const action = new TodoActions.DeleteTodoAction(1);
    const oldState = [
      { id: 1, text: 'todo', completed: false },
      { id: 2, text: 'todo', completed: false }
    ];
    const newState = TodosReducer(oldState, action);
    expect(newState.length).toEqual(1);
    expect(newState[0].id).toEqual(2);
  });

  it('should return a new state with new todos: UpdateAction', () => {
    const action = new TodoActions.UpdateAction(1, 'update todo');
    const oldState = [
      { id: 1, text: 'todo', completed: false },
      { id: 2, text: 'todo', completed: false }
    ];
    const newState = TodosReducer(oldState, action);
    expect(newState.length).toEqual(2);
    expect(newState[0].text).toEqual('update todo');
    expect(newState[1].text).toEqual('todo');
  });

  it('should return a new state with new todos: ClearCompletedAction', () => {
    const action = new TodoActions.ClearCompletedAction();
    const oldState = [
      { id: 1, text: 'todo', completed: false },
      { id: 2, text: 'todo', completed: true },
      { id: 3, text: 'todo', completed: false },
    ];
    const newState = TodosReducer(oldState, action);
    expect(newState.length).toEqual(2);
  });

  it('should return a new state with new todos: CompletedAllAction', () => {
    const action = new TodoActions.CompletedAllAction();
    const oldState = [
      { id: 1, text: 'todo', completed: false },
      { id: 2, text: 'todo', completed: true },
      { id: 3, text: 'todo', completed: false },
    ];
    const newState = TodosReducer(oldState, action);
    expect(newState.length).toEqual(3);
    expect(newState.every(t => t.completed)).toBeTruthy();
  });

  it('should return the same state with unknown action', () => {
    const action: any = new TodoActions.CompletedAllAction();
    action.type = 'what';
    const oldState = [
      { id: 1, text: 'todo', completed: false },
      { id: 2, text: 'todo', completed: true },
      { id: 3, text: 'todo', completed: false },
    ];
    const newState = TodosReducer(oldState, action);
    expect(newState).toEqual(oldState);
  });

});
