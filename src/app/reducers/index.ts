import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import {
  routerReducer, RouterReducerState
} from '@ngrx/router-store';

import { RouterStateUrl } from './custom-route-serializer';
import { environment } from '@environments/environment';

export interface State {
  router: RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const getRouterState = createFeatureSelector<RouterReducerState<RouterStateUrl>>(
  'router'
);
