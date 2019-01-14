import { Component, OnInit } from '@angular/core';
import { Task } from './task';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  /*date: Date;
  name: string;
  tasks: Task[] = [];

  constructor(private dataService: DataService) {}

  addTask() {
    this.dataService.addData(this.name, this.date);
    this.tasks = this.dataService.getData();
  }

  removeTask(removeId: string) {
    this.dataService.deleteData(removeId);
    this.tasks = this.dataService.getData();
  }

  changeState(id: string) {
    this.dataService.changeData(id);
  }

  trackByFn(index) {
    return index;
  }*/

  ngOnInit() {
  }
}
