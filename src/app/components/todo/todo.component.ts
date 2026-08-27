import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ChangeDetectorRef,
  effect,
  inject,
  viewChild,
  input,
  signal,
  untracked,
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
  readonly syncCount = signal(0);
  editingMode = false;
  titleControl = new FormControl('', { nonNullable: true });
  readonly inputElement = viewChild.required<ElementRef<HTMLInputElement>>('inputElement');

  constructor() {
    // TODO (signalMethod — Caso 2): importar signalMethod desde '@ngrx/signals'
    // TODO (signalMethod — Caso 2): crear syncTitle = signalMethod<Todo>((todo) => { ... })
    // TODO (signalMethod — Caso 2): conectar con syncTitle(this.todo) en el constructor
    // TODO (signalMethod — Caso 2): eliminar effect + untracked de abajo
    effect(() => {
      const title = this.todo().title;

      // untracked: setValue y syncCount.update son writes imperativos.
      // Sin untracked, syncCount quedaría trackeado → el effect se re-dispara
      // al incrementar el contador → bucle infinito (implicit tracking).
      untracked(() => {
        this.titleControl.setValue(title);
        this.syncCount.update((count) => count + 1);
      });
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
