import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { TodosStore } from '@services/todos.store';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule],
  selector: 'app-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  readonly store = inject(TodosStore);

  input = new FormControl('', { nonNullable: true });

  addTodo() {
    const title = this.input.value.trim();
    if (title !== '') {
      this.store.add(title);
      this.input.setValue('');
    }
  }
}
