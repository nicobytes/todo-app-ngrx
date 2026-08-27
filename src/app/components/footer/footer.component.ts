import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { TodosStore } from '@services/todos.store';
import { CounterComponent } from '@components/counter/counter.component';
import { ClearBtnComponent } from '@components/clear-btn/clear-btn.component';

@Component({
  imports: [CounterComponent, ClearBtnComponent, RouterLink],
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  readonly store = inject(TodosStore);
}
