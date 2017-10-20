import * as FilterActions from './filter.actions';
import { FilterReducer } from './filter.reducer';

describe('Redux: FilterReducer', () => {

  it('should return "new filter" as new state', () => {
    const action = new FilterActions.SetFilterAction('new filter');
    const newState = FilterReducer('old state', action);
    expect(newState).toEqual('new filter');
  });

  it('should return the same state with null action', () => {
    const action = null;
    const newState = FilterReducer('old state', action);
    expect(newState).toEqual('old state');
  });

  it('should return the same state with unknown action', () => {
    const action: any = new FilterActions.SetFilterAction('new filter');
    action.type = 'what';
    const newState = FilterReducer('old state', action);
    expect(newState).toEqual('old state');
  });

});
