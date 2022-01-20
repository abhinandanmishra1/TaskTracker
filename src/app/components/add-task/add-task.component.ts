import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Task } from 'src/app/TASK';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask:EventEmitter<Task>=new EventEmitter();
  text!:string;
  date!:string;
  reminder:boolean=false;
  showAddTask!:boolean;
  subscription!:Subscription;
  constructor(private uiService:UiService) {
    this.subscription=this.uiService.onToggle().subscribe(
      value=>this.showAddTask=value
    )
   }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.text){
      alert("Please add a task!");
      return;
    }
    const newTask={
      text:this.text,
      date:this.date,
      reminder:this.reminder
    }
    this.onAddTask.emit(newTask);
    this.text='';
    this.date='';
    this.reminder=false;
  }

}
