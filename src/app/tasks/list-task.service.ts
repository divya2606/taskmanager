import {Http,Response,RequestOptions,Headers} from '@angular/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Task} from './task';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class listTaskService{
    private updateTask :Task;
    constructor(private _httpService:Http){}

    getAllTasks(): Observable<Task[]>{
       return this._httpService.get("http://localhost:8081/taskmanager/api/taskmanager")
        .map((response: Response) => response.json())
        .catch(this.handleError);

    }

    getTaskById(taskId: string): Observable<Task>{
        return  this._httpService.get("http://localhost:8081/taskmanager/api/taskmanager/"+taskId)
        .map((response: Response) => response.json())
        .catch(this.handleError);
          } 

    private handleError(error: Response){
        return Observable.throw(error); 
    }

    addTask(task: Task){
        let body=JSON.stringify(task);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        return this._httpService.post("http://localhost:8081/taskmanager/api/task",task);
    }

    deleteTask(taskId: string){
      return  this._httpService.delete("http://localhost:8081/taskmanager/api/task/"+taskId);
    } 

    setter(updateTask :Task){

        this.updateTask =updateTask ;
        console.log(updateTask);
    }

    getter(){
        return this.updateTask ;
    }
    editTask(task: Task,taskId: string){
        let body=JSON.stringify(task);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        return this._httpService.put("http://localhost:8081/taskmanager/api/task/"+taskId,task);
    }

    }