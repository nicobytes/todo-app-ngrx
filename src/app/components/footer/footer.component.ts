import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgIf, AsyncPipe } from '@angular/common';

import { TodoService } from '@services/todo.service';
import { CounterComponent } from '@components/counter/counter.component';
import { ClearBtnComponent } from '@components/clear-btn/clear-btn.component';

@Component({
  standalone: true,
  imports: [NgIf, AsyncPipe, CounterComponent, ClearBtnComponent],
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {

  todos$ = this.todoService.getTodos();
  filter$ = this.todoService.getFilter();

  constructor(private todoService: TodoService) {}

}
