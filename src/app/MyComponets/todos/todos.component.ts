import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  // localItem: string;
  todos!: Todo[];
  localItem: string
  constructor() {
    this.localItem = localStorage.getItem("todos");
    if (this.localItem == null) {
      this.todos = [];
    } 
    else {
      this.todos = JSON.parse(this.localItem);
    }
  }
  ngOnInit(): void {}

  deleteTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem('todo', JSON.stringify(this.todos));
  }
  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem('todo', JSON.stringify(this.todos));
  }
}
