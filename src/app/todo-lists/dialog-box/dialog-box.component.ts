import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dialog-box',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dialog-box.component.html',
  styleUrl: './dialog-box.component.css'
})
export class DialogBoxComponent {
  @Output() submit = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();
  todoListTitle = '';

  onClose() {
    return this.close.emit();
  }

  onSubmit() {
    console.log(this.todoListTitle);
    return this.submit.emit();
  }
}
