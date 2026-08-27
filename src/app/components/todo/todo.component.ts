import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ChangeDetectorRef,
  inject,
  viewChild,
  input,
  effect,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

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
  editingMode = false;
  titleControl = new FormControl('', { nonNullable: true });
  readonly inputElement = viewChild.required<ElementRef<HTMLInputElement>>('inputElement');

  constructor() {
    effect(() => {
      this.titleControl.setValue(this.todo().title);
    });
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
