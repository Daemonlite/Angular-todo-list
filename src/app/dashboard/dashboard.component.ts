import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { Task } from '../model/task';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  taskObj: Task = new Task();
  taskArr: Task[] = [];

  addTaskValue: string = '';
  subscription: Subscription | undefined;

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.addTaskValue = '';
    this.taskObj = new Task();
    this.taskArr = [];
    this.getAllTask();
  }

  getAllTask() {
    this.subscription = this.crudService.getAllTasks().subscribe({
      next: (res) => {
        this.taskArr = res;
      },
      error: (err) => {
        alert('unable to get tasks');
      }
    });
  }

  addTask() {
    this.taskObj.task_name = this.addTaskValue;
    this.subscription = this.crudService.addTask(this.taskObj).subscribe({
      next: (res) => {
        this.ngOnInit();
        this.addTaskValue = '';
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  editTask() {
    this.subscription = this.crudService.editTask(this.taskObj).subscribe({
      next: (res) => {
        this.ngOnInit();
      },
      error: (err) => {
        alert('failed to update task');
      }
    });
  }

  deleteTask(etask: Task) {
    this.subscription = this.crudService.deleteTask(etask).subscribe({
      next: (res) => {
        this.ngOnInit();
      },
      error: (err) => {
        alert('unable to delete task');
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

