import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/Task';
@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  @Output() AddTaskEvent= new EventEmitter<object>();

  Addtask(){
    
    var title = prompt("Enter The Title?") || "";
    var description = prompt("Enter The Description?") || "";
    console.log(this.AddTaskEvent.emit({title,description}));
    this.AddTaskEvent.emit({title,description});
    
    
  }
 

  constructor() { }

  ngOnInit(): void {
  }

}
