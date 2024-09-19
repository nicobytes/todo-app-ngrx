import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgIf, AsyncPipe } from '@angular/common';

import { TodoService } from '@services/todo.service';

@Component({
  standalone: true,
  imports: [NgIf, AsyncPipe],
  selector: 'app-clear-btn',
  templateUrl: './clear-btn.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClearBtnComponent {

  completedTodos$ = this.todoService.getCompletedTodos();

  constructor(private todoService: TodoService) {}

  clear() {
    this.todoService.clearCompleted();
  }

}
