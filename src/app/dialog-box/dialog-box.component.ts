import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dialog-box',
  standalone: true,
  imports: [],
  templateUrl: './dialog-box.component.html',
  styleUrl: './dialog-box.component.css'
})
export class DialogBoxComponent {
  @Output() submit = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();

  onClose() {
    return this.close.emit();
  }

  onSubmit() {
    return this.submit.emit();
  }
}
