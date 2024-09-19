import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';

import { TodoService } from '@services/todo.service';
import { CounterComponent } from '@components/counter/counter.component';
import { ClearBtnComponent } from '@components/clear-btn/clear-btn.component';

@Component({
  standalone: true,
  imports: [AsyncPipe, CounterComponent, ClearBtnComponent, RouterLink],
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  private todoService = inject(TodoService);


  todos$ = this.todoService.getTodos();
  filter$ = this.todoService.getFilter();

}
