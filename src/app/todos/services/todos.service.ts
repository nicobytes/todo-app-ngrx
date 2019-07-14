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

  createTodo(todo: Todo): Observable<Todo> {
    const url = `${this.apiUrl}/todos`;
    return this.http.post(url, {todo})
    .pipe(
      map((response: any) => response.todo),
    );
  }

  updateTodo(todo: Partial<Todo>): Observable<Todo> {
    const url = `${this.apiUrl}/todos/${todo.id}`;
    return this.http.patch(url, {todo})
    .pipe(
      map((response: any) => response.todo),
    );
  }

  deleteTodo(id: number): Observable<Todo> {
    const url = `${this.apiUrl}/todos/${id}`;
    return this.http.delete(url)
    .pipe(
      map((response: any) => response.todo),
    );
  }

}
