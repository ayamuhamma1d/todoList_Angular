import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {
  tasks: any[] = [];

  addTask(task: string) {
    if (task) {
      let newTask = {
        taskName: task,
        completed: false,
      };
      this.tasks.push(newTask);
      console.log(this.tasks);

    }
  }


}
