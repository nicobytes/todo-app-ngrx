import { Component, OnInit, ChangeDetectionStrategy, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Filter } from '@models/filter.model';
import { TodoComponent } from '@components/todo/todo.component';

import { TodoService } from '@services/todo.service';

@Component({
  standalone: true,
  imports: [TodoComponent, AsyncPipe],
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosComponent implements OnInit {
  private todoService = inject(TodoService);
  private route = inject(ActivatedRoute);

  todos$ = this.todoService.getTodosByFilter();

  constructor() {
    this.route.paramMap.subscribe((params) => {
      const filter = params.get('filter') as Filter;
      this.todoService.changeFilter(filter || 'all');
    });
  }

  ngOnInit(): void {
    this.todoService.readStorage();
  }
}
