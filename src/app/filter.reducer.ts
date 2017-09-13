import * as FilterActions from './filter.actions';

export function FilterReducer(state: string = 'SHOW_ALL', action: FilterActions.SetFilterAction){
  switch(action.type){
    case FilterActions.SET_FILTER:{
      return action.filter;
    }
    default:{
      return state;
    }
  }
}
