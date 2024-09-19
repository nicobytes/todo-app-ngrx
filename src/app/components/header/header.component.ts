import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { TodoService } from '@services/todo.service';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule],
  selector: 'app-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private todoService = inject(TodoService);

  input = new FormControl('', { nonNullable: true });

  addTodo() {
    const title = this.input.value.trim();
    if (title !== '') {
      this.todoService.add(title);
      this.input.setValue('');
    }
  }
}
