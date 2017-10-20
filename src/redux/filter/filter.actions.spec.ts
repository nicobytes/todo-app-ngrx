import * as FilterActions from './filter.actions';

describe('Redux: FilterActions', () => {

  describe('Test for SetFilterAction', () => {

    it('should return an action with type an filter', () => {
      const action = new FilterActions.SetFilterAction('new filter');
      expect(action.type).toEqual(FilterActions.SET_FILTER);
      expect(action.filter).toEqual('new filter');
    });

  });

});
