import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { TodoService } from '@services/todo.service';

@Component({
  standalone: true,
  imports: [AsyncPipe],
  selector: 'app-clear-btn',
  templateUrl: './clear-btn.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClearBtnComponent {
  private todoService = inject(TodoService);


  completedTodos$ = this.todoService.getCompletedTodos();

  clear() {
    this.todoService.clearCompleted();
  }

}
