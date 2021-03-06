import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
   todos: Todo[];
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(
      todo => { this.todos = todo },
    )
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter(td => td.id !== todo.id)
    this.todoService.deleteTodo(todo).subscribe()
  }

  addTodo(todo: Todo) {
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo)
    })
  }

}
