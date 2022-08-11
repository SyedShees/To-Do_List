import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/Task';
@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  @Output() data= new EventEmitter<{title:string, description:string}>();

  Addtask(){
    
    var Title = prompt("Enter The Title?") || "";
    var Description = prompt("Enter The Description?") || "";
    //console.log(this.AddTaskEvent.emit({title,description}));
    this.data.emit({title:Title,description:Description});
    
    
  }
 

  constructor() { }

  ngOnInit(): void {
  }

}
