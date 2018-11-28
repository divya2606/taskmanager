import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms'; 
import { CommonModule } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './tasks/add-task.component';
import { ListTaskComponent } from './tasks/list-task.component';
import { UpdateTaskComponent } from './tasks/update-task.component';
import { listTaskService } from './tasks/list-task.service';
import { HttpModule } from '@angular/http';
import { FilterPipe } from './tasks/filter.pipe';

export  const  appRoutes : Routes =[
  {path: 'list', component: ListTaskComponent},
  {path: 'create', component: AddTaskComponent},
  {path: 'update', component: UpdateTaskComponent},
  {path: '', redirectTo: '/create' , pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    ListTaskComponent,
    UpdateTaskComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [listTaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
