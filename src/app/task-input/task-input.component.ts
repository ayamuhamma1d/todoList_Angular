import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.css']
})
export class TaskInputComponent {
  newTask: string = '';
  @Output() addTask = new EventEmitter<string>();

  enterTask(){
    console.log(this.newTask);

    this.addTask.emit(this.newTask);
    this.newTask = '';
  }
}
