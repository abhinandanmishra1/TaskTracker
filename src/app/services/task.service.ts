import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient,HttpEvent,HttpHeaders} from "@angular/common/http"
import { Task } from 'src/app/TASK';
// import { TASKS } from 'src/app/mock-tasks';

const httpOptions={
  header:new HttpHeaders({
    'Content-Type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  //HTTP return observable automatically
  // observable is something which observes things
  // and make changes 
  // promise
  private apiUrl="http://localhost:5000/tasks";
  constructor(private http:HttpClient) { }
  
  getTasks() :Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task:Task) :Observable<Task[]>{
    const url=`${this.apiUrl}/${task.id}`;

    return this.http.delete<Task[]>(url);
  }
  updateTaskReminder(task:Task) :Observable<Task>{
    const url=`${this.apiUrl}/${task.id}`;

    return this.http.put<Task>(url,task);
  }

}
