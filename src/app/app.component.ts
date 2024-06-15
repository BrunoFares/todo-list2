import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TodoListsComponent } from './todo-lists/todo-lists.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, TodoListsComponent, TodoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
