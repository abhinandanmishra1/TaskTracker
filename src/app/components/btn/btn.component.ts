import { Component, OnInit ,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css']
})
export class BtnComponent implements OnInit {
  @Input()
  name!: string;
  @Input() color!: string;
  @Output() btnClick=new EventEmitter();   // used for sending output back or emit some function
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.btnClick.emit();
  }

}
