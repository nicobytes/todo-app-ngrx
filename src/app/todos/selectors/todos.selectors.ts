import { createSelector } from '@ngrx/store';

import { getTodosModuleState } from '@todos/reducers';
import { todosAdapter } from '@todos/states';
import { getRouterState } from '@app/reducers';

export const geTodosState = createSelector(
  getTodosModuleState,
  state => state.todos
);

export const {
  selectAll: getAllTodos,
  selectTotal: getCountAllTodos,
  selectEntities: getEntitiesTodos
} = todosAdapter.getSelectors(geTodosState);

export const getVisibleTodos = createSelector(
  getAllTodos,
  getRouterState,
  (todos, router) => {
    if (router?.state?.params) {
      const filter = router.state.params.filter;
        switch (filter) {
          default:
            return todos;
          case 'completed':
            return todos.filter(t => t.completed);
          case 'active':
            return todos.filter(t => !t.completed);
        }
    }
    return todos;
  }
);

export const getTodo = createSelector(
  getEntitiesTodos,
  getRouterState,
  (entities, router) => {
    if (router?.state?.params) {
      const id = router.state.params.id;
      return entities[id];
    }
    return null;
  }
);

export const getCountVisibleTodos = createSelector(
  getVisibleTodos,
  (todos) => todos.length
);


export const getFilter = createSelector(
  getRouterState,
  (router) => {
    if (router.state && router.state.params.filter) {
      const filter = router.state.params.filter;
      switch (filter) {
        default:
          return 'all';
        case 'completed':
          return 'completed';
        case 'active':
          return 'active';
      }
    }
    return 'all';
  }
);
