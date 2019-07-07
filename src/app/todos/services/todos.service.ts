import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Todo } from '@todos/models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TodosService {

  constructor(
    @Inject('API_URL') private apiUrl: string,
    private http: HttpClient
  ) {
  }

  getAllTodos(): Observable<Todo[]> {
    const url = `${this.apiUrl}/todos`;
    return this.http.get<Todo[]>(url)
    .pipe(
      map(todos => todos.slice(0, 10)),
    );
  }

}
