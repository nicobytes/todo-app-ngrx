import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ChangeDetectorRef,
  inject,
  viewChild,
  input,
  signal,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { signalMethod } from '@ngrx/signals';

import { Todo } from '@models/todo.model';
import { TodosStore } from '@services/todos.store';

@Component({
  imports: [NgClass, ReactiveFormsModule],
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent {
  readonly store = inject(TodosStore);
  private cdRef = inject(ChangeDetectorRef);

  readonly todo = input.required<Todo>();
  readonly syncCount = signal(0);
  editingMode = false;
  titleControl = new FormControl('', { nonNullable: true });
  readonly inputElement = viewChild.required<ElementRef<HTMLInputElement>>('inputElement');

  private readonly syncTitle = signalMethod<Todo>((todo) => {
    this.titleControl.setValue(todo.title);
    this.syncCount.update((count) => count + 1);
  });

  constructor() {
    this.syncTitle(this.todo);
  }

  toggle() {
    this.store.toggle(this.todo().id);
  }

  update() {
    const title = this.titleControl.value.trim();
    if (title !== '') {
      this.store.update(this.todo().id, { title });
    }
  }

  remove() {
    this.store.remove(this.todo().id);
  }

  escape() {
    this.editingMode = !this.editingMode;
    this.titleControl.setValue(this.todo().title);
  }

  enableEditingMode() {
    this.editingMode = !this.editingMode;
    this.cdRef.detectChanges();
    this.inputElement().nativeElement.focus();
  }
}
