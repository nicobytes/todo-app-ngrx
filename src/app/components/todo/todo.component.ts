import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild, ChangeDetectorRef, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';


import { Todo } from '@models/todo.model';
import { TodoService } from '@services/todo.service';

@Component({
  standalone: true,
  imports: [NgClass, ReactiveFormsModule],
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent {
  private todoService = inject(TodoService);
  private cdRef = inject(ChangeDetectorRef);

  _todo!: Todo;
  @Input()
  set todo(todo: Todo) {
    this._todo = todo;
    this.input.setValue(this._todo.title);
  }
  editingMode = false;
  input = new FormControl('', { nonNullable: true });
  @ViewChild('inputElement') inputElement!: ElementRef<HTMLInputElement>;

  toggle() {
    this.todoService.toggle(this._todo.id);
  }

  update() {
    const title = this.input.value.trim();
    if (title !== '') {
      this.todoService.update(this._todo.id, { title });
    }
  }

  remove() {
    this.todoService.remove(this._todo.id);
  }

  escape() {
    this.editingMode = !this.editingMode;
    this.input.setValue(this._todo.title);
  }

  enableEditingMode() {
    this.editingMode = !this.editingMode;
    this.cdRef.detectChanges();
    this.inputElement.nativeElement.focus();
  }
}
