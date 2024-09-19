import { Component, OnInit, ChangeDetectionStrategy, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Filter } from '@models/filter.model';
import { TodoComponent } from '@components/todo/todo.component';

import { TodosStore } from '@services/todos.store';

@Component({
  standalone: true,
  imports: [TodoComponent],
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosComponent implements OnInit {
  readonly store = inject(TodosStore);
  private route = inject(ActivatedRoute);

  constructor() {
    this.route.paramMap.subscribe((params) => {
      const filter = params.get('filter') as Filter;
      this.store.changeFilter(filter || 'all');
    });
  }

  ngOnInit(): void {
    // this.store.readStorage();
  }
}
