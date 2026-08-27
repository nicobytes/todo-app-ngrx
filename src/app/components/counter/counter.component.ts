import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { TodosStore } from '@services/todos.store';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {
  readonly store = inject(TodosStore);
}
