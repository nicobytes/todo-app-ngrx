import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { TodosStore } from '@services/todos.store';
import { CounterComponent } from '@components/counter/counter.component';
import { ClearBtnComponent } from '@components/clear-btn/clear-btn.component';

@Component({
  standalone: true,
  imports: [CounterComponent, ClearBtnComponent, RouterLink],
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  readonly store = inject(TodosStore);
}
