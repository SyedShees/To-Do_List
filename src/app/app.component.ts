import { Component } from '@angular/core';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { Task } from './models/Task';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  task: any[] = [];

  

  AddTask(tit:string,des: string){
    this.task.push({'title':tit,'description':des});
    console.log(this.task);
    
  }
  

  
}

