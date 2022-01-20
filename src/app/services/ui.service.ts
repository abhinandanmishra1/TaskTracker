import { Injectable } from '@angular/core';
// Read about subject it's something in angular
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask:boolean=false;
  private subject=new Subject<any>();
  constructor() { }
  // this function is used to change ui
  toggleAddTask():void{
    this.showAddTask=!this.showAddTask;
    this.subject.next(this.showAddTask);
  }
  // this one is to add 
  onToggle():Observable<any>{
    return this.subject.asObservable(); 
    // 
  }
}
