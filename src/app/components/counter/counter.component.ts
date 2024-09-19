import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgIf, AsyncPipe } from '@angular/common';

import { TodoService } from '@services/todo.service';

@Component({
  standalone: true,
  imports: [NgIf, AsyncPipe],
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent{

  pendingTodos$ = this.todoService.getPendingTodos();

  constructor(private todoService: TodoService) {}

}
