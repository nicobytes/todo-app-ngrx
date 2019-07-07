import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { TodosRoutingModule } from './todos-routing.module';

import * as fromComponents from './components';
import * as fromContainers from './containers';
import * as fromReducers from './reducers';
import * as fromServices from './services';
import * as fromEffects from './effects';
import * as fromGuards from './guards';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TodosRoutingModule,
    StoreModule.forFeature('todos-module', fromReducers.reducers, {
      metaReducers: fromReducers.metaReducers
    }),
    EffectsModule.forFeature(fromEffects.EFFECTS)
  ],
  declarations: [
    ...fromComponents.COMPONENTS,
    ...fromContainers.CONTAINERS
  ],
  providers: [
    ...fromServices.SERVICES,
    ...fromGuards.GUARDS
  ]
})
export class TodosModule { }
