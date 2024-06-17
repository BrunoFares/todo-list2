import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { todoTitles } from '../todo-titles';

@Component({
  selector: 'app-dialog-box',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dialog-box.component.html',
  styleUrl: './dialog-box.component.css'
})
export class DialogBoxComponent {
  @Output() close = new EventEmitter<void>();
  todoListTitle = '';

  onClose() {
    return this.close.emit();
  }

  onSubmit() {
    todoTitles.push(this.todoListTitle);
    return this.close.emit();
  }
}
