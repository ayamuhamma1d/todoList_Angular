import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
@Input()task:any[]=[];
deleteTask(index:number){
console.log(index);
if (index !== -1) {
  this.task.splice(index, 1);
}
}
completeTask(index:number){
  this.task[index].completed = !this.task[index].completed;
  console.log(this.task[index].completed);
}
}
