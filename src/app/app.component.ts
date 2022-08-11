import { Component } from '@angular/core';
import { Task } from './models/Task';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public task = [{title:"walk",description:"daily"}];

  

  AddTask(data:any){
    this.task.push(data);
    console.log(this.task);
    
  }
  

  
}

