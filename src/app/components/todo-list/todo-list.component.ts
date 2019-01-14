import {Component, OnInit} from '@angular/core';
import {Task} from '../../task';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit  {

  selectedTask;
  sortBy = 'status';
  tasks: Task[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.tasks = this.dataService.getData();
    this.dataService.sortTasks(this.tasks, this.sortBy);
  }

  addTask({name, date}) {
    this.dataService.addData(name, date);
    this.tasks = this.dataService.getData();
    console.log(1 + this.sortBy);
  }

  removeTask(removeId: string) {
    this.dataService.deleteData(removeId);
    this.tasks = this.dataService.getData();
  }

  changeState(id: string) {
    this.dataService.changeData(id);
    this.tasks = this.dataService.getData();
    this.dataService.sortTasks(this.tasks, this.sortBy);
  }
}
