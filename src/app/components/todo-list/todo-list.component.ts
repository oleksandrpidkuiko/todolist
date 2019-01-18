import {Component, OnInit} from '@angular/core';
import {Task} from '../../task';
import {DataService} from '../../data.service';
import {MatDialog, MatSnackBar} from '@angular/material';
import {ModalForChangeComponent} from '../modal-for-change/modal-for-change.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  sortBy = 'status';
  tasks: Task[] = [];

  constructor(private dataService: DataService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.tasks = this.dataService.getData();
    this.dataService.sortTasks(this.tasks, this.sortBy);
  }

  addTask({name, date}) {
    this.dataService.addData(name, date);
    this.tasks = this.dataService.getData();
  }

  removeTask(removeId: string) {
    this.dataService.deleteData(removeId);
    this.tasks = this.dataService.getData();
  }

  changeTaskState(id: string) {
    this.dataService.changeState(id);
    this.tasks = this.dataService.getData();
    this.dataService.sortTasks(this.tasks, this.sortBy);
  }

  changeTaskData(data: any) {
    this.dataService.changeDate(data);
    this.tasks = this.dataService.getData();
    this.snackBar.open('Task edit successfuly!', '', {
      duration: 2000,
      verticalPosition: 'top'
    });
  }


}

