import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { TodosStore } from '@services/todos.store';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  readonly store = inject(TodosStore);

  titleControl = new FormControl('', { nonNullable: true });

  addTodo() {
    const title = this.titleControl.value.trim();
    if (title !== '') {
      this.store.add(title);
      this.titleControl.setValue('');
    }
  }
}
