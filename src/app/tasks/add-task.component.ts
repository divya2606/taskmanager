import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Task} from './task';
import {listTaskService} from './list-task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  newTask = new Task(); 
  constructor(private _taskService: listTaskService) { }

  ngOnInit() {
  }

  saveTask(taskForm: NgForm): void {
    console.log(taskForm.value);
  }

  addTask(): void{
    this._taskService.addTask(this.newTask)
    .subscribe((response) =>  {
      console.log(response);
      this.reset();
    }
      ,(error) => {
      console.log(error);
    });
  } 

  private reset(){
    this.newTask.endDate=null;
    this.newTask.parentId=null;
    this.newTask.priority=null;
    this.newTask.startDate=null;
    this.newTask.task=null;
  }
}
