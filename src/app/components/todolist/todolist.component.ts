import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'todo',
  templateUrl: './todolist.component.html'
})
export class TodolistComponent {
  form = new FormGroup({
    todos: new FormArray([new FormControl])
  })

  get todos(){
    console.log(localStorage.getItem('todo'))
    return this.form.get('todos') as FormArray
  }
  
  addTodo(todo:HTMLInputElement){
    this.todos.push(new FormControl(todo.value))
    todo.value=''
  }
  removeTodo(todo:number){
    this.todos.controls.splice(todo,1)
  }
}
