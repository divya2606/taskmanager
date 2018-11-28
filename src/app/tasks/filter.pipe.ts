import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './task';

@Pipe({
  name: 'taskFilter'
})
export class FilterPipe implements PipeTransform {
  transform(tasks: Task[], sTask: string, spTask: string, sPriorityFrom: string, sPriorityTo: string, sStartdate: string, sEnddate: string){
    if (tasks && tasks.length){
      if(!tasks && (!sTask || !spTask || sPriorityFrom || sPriorityTo || sStartdate || sEnddate)){
        return tasks;
      }
        return tasks.filter(task =>{
            if (sTask && task.task.toLowerCase().indexOf(sTask.toLowerCase()) === -1){
                return false;
            }
            if (spTask && task.parentId.toLowerCase().indexOf(spTask.toLowerCase()) === -1){
                return false;
            }
            if (sPriorityFrom && sPriorityTo){
              if((task.priority < sPriorityFrom) || (task.priority > sPriorityTo) ){
                return false;
              }else
              return true;
            }
            else if (sPriorityFrom){
              if(task.priority != sPriorityFrom){
                return false;
              }
            }
            else if (sPriorityTo && task.priority != sPriorityTo){
              return false;
            }
            if (sStartdate && sEnddate){
              if((task.startDate > sStartdate) && (task.endDate < sEnddate)){
                return true;
              }else
              return false;
            }
            else if (sStartdate){
              if(task.startDate.toLowerCase().indexOf(sStartdate.toLowerCase()) === -1){
                return false;
              }
            }
            else if (sEnddate && task.endDate.toLowerCase().indexOf(sEnddate.toLowerCase()) === -1){
              return false;
            }
            return true;
       })
    }
    else{
        return tasks;
    }
}
  

}


