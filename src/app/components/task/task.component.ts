import { Component, OnInit } from '@angular/core';
// import the input 
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/TASK';
// import { TASKS } from 'src/app/mock-tasks';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks :Task[]=[]
  constructor(private taskService:TaskService) {

   }

  ngOnInit(): void {
    // Earlier
    // this.tasks=this.taskService.getTasks();
    this.taskService.getTasks().subscribe(tasks=>(this.tasks=tasks));
  }

  deleteTask(task:Task){
    this.taskService.deleteTask(task).subscribe(()=>this.tasks=this.tasks.filter(t=>t.id !== task.id));
  }
  toggleReminder(task:Task){
    task.reminder=!task.reminder;
    console.log(task.reminder)
    this.taskService.updateTaskReminder(task).subscribe();
  }

}
