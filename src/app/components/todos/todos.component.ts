import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Filter } from '@models/filter.model';
import { TodoComponent } from '@components/todo/todo.component';

import { TodosStore } from '@services/todos.store';

@Component({
  imports: [TodoComponent],
  selector: 'app-todos',
  templateUrl: './todos.component.html',
})
export class TodosComponent {
  readonly store = inject(TodosStore);
  private route = inject(ActivatedRoute);

  constructor() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const filter = params.get('filter') as Filter;
      this.store.changeFilter(filter || 'all');
    });
  }
}
