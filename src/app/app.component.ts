import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TodoListsComponent } from './todo-lists/todo-lists.component';
import { TodoListComponent } from './todo-lists/todo-list/todo-list.component';
import { DialogBoxComponent } from './todo-lists/dialog-box/dialog-box.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, TodoListsComponent, TodoListComponent, DialogBoxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  displayDialog: boolean = false;

  onAddList() {
    this.displayDialog = true;
  }

  onCloseAddList() {
    this.displayDialog = false;
  }
}
