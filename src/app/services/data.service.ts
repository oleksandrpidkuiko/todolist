import {Injectable} from '@angular/core';
import {Task} from '../task';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private data: Task[] = [];

  getData(): Task[] {
    const data = JSON.parse(localStorage.getItem('tasks'));

    return data;
  }

  doId(): string {
    return Math.random().toString(36).substr(2, 16);
  }

  deleteData(removeId) {
    this.data = JSON.parse(localStorage.getItem('tasks'))
      .filter(item => item.id !== removeId);

    localStorage.setItem('tasks', JSON.stringify(this.data));
  }

  addData(name: string, date?: Date) {
    const TASK = {
      id: this.doId(),
      name,
      date,
      status: false
    };

    if (localStorage.getItem('tasks')) {
      this.data = JSON.parse(localStorage.getItem('tasks'));
      this.data.push(TASK);
      localStorage.setItem('tasks', JSON.stringify(this.data));
    } else {
      this.data.push(TASK);
      localStorage.setItem('tasks', JSON.stringify(this.data));
    }

  }

  sortTasks(task, value) {
    if (task) {
      task = task.sort(function (a, b) {
        return a[value] - b[value];
      });
      return task;
    }
  }

  changeState(taskId) {
    this.data = JSON.parse(localStorage.getItem('tasks'));
    this.data.forEach(({id}, index, arr) => {

      if (id === taskId) {
        arr[index].status = !arr[index].status;
      }
    });
    localStorage.setItem('tasks', JSON.stringify(this.data));
  }

  changeDate(taskOptions) {
    this.data = JSON.parse(localStorage.getItem('tasks'));
    this.data.forEach(({id}, index, arr) => {

      if (id === taskOptions.id) {
        arr[index].date = taskOptions.date;
        arr[index].name = taskOptions.name;
      }
    });
    localStorage.setItem('tasks', JSON.stringify(this.data));
  }

  countDoneTask() {
    let count = 0;

    this.data = JSON.parse(localStorage.getItem('tasks'));

    this.data.forEach((elem, index, array) => {

      if (elem.status) {
        count++;
      }
    });
    return count;
  }

  countInProgress() {
    let count = 0;

    this.data = JSON.parse(localStorage.getItem('tasks'));

    this.data.forEach((elem, index, array) => {

      if (!elem.status) {
        count++;
      }
    });
    return count;
  }
}
