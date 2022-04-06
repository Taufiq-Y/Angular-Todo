import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodosComponent } from './MyComponets/todos/todos.component';
// import { TodosItemComponent } from './MyComponents/todos-item/todos-item.component';
import { TodoItemComponent } from './MyComponets/todo-item/todo-item.component';
import { AddTodoComponent } from './MyComponets/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    // TodosItemComponent,
    TodoItemComponent,
    AddTodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
