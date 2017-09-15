import * as FilterActions from './filter.actions';

export function FilterReducer(state: string = 'SHOW_ALL', action: FilterActions.SetFilterAction) {
  if (!action) {
    return state;
  }
  switch (action.type) {
    case FilterActions.SET_FILTER: {
      return action.filter;
    }
    default: {
      return state;
    }
  }
}
