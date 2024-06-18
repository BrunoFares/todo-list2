import { Component, EventEmitter, Output } from '@angular/core';
import { todoTitles } from './todo-titles';

@Component({
  selector: 'app-todo-lists',
  standalone: true,
  imports: [],
  templateUrl: './todo-lists.component.html',
  styleUrl: './todo-lists.component.css'
})
export class TodoListsComponent {
  @Output() addList = new EventEmitter<void>();
  titles = todoTitles;
  
  onAddList() {
    return this.addList.emit();
  }
}
