import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { TodosStore } from '@services/todos.store';

@Component({
  standalone: true,
  selector: 'app-clear-btn',
  templateUrl: './clear-btn.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClearBtnComponent {
  readonly store = inject(TodosStore);
}
