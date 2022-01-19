import { Component, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/TASK';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { EventEmitter } from '@angular/core';  // event emitter should be imported from angular/core
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task!:Task;  // don't miss exclamation 
  @Output() onDeleteTask: EventEmitter<Task>=new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task>=new EventEmitter();
  faTimes=faTimes;
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task: Task){
    this.onDeleteTask.emit(task);
  }
  onToggle(task: Task){
    // task.reminder=!task.reminder;
    this.onToggleReminder.emit(task);
  }
}
