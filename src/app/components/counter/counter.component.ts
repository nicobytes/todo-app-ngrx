import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { TodosStore } from '@services/todos.store';

@Component({
  standalone: true,
  imports: [AsyncPipe],
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent{
  readonly store = inject(TodosStore);
}
