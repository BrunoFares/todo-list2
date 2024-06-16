import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-lists',
  standalone: true,
  imports: [],
  templateUrl: './todo-lists.component.html',
  styleUrl: './todo-lists.component.css'
})
export class TodoListsComponent {
  @Output() addList = new EventEmitter<void>();

  onAddList() {
    return this.addList.emit();
  }
}
