import { Component, OnInit } from '@angular/core';
import {Task} from './task';
import {listTaskService} from './list-task.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})

export class UpdateTaskComponent implements OnInit {
  private updateTask:Task;
  constructor(private _taskService: listTaskService,private _router:Router) { }
    
ngOnInit() {
  this.updateTask=this._taskService.getter();
  console.log(this.updateTask);
}

editTask(taskId: string){
  this._taskService.editTask(this.updateTask,taskId)
    .subscribe((response) =>  {
      console.log(response);
      this._router.navigate(["/list"]);
    }
      ,(error) => {
      console.log(error);
    });

}
cancel(){
  this._router.navigate(["/list"]);
}

}
