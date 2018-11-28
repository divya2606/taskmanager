import { Component, OnInit } from '@angular/core';
import {listTaskService} from './list-task.service';
import {Task} from './task';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

    // private task:Task;
    tasks: Task[];
  
  constructor(private _taskService: listTaskService, private _router:Router) { }

  getTasks(): void{
    this._taskService.getAllTasks()
    .subscribe((taskData) =>
     {this.tasks = taskData, console.log(taskData) },
     (error) =>{
      console.log(error);
    });

  }

  ngOnInit(): void {
    this.getTasks();
  }

deleteTask(taskId: string){
  this._taskService.deleteTask(taskId)
  .subscribe((response) => { console.log(response); this.getTasks();}),
    (error) => {
    console.log(error);
  }

  }

  updateTask(task){
    console.log(task);
    this._taskService.setter(task);
    this._router.navigate(["/update"]);
  }
}
