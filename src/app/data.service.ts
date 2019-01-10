import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private data: Task[] = [
    { id: '1', name: 'Выучить Angular', date:  new Date(1996), status: false},
    { id: '2', name: 'Выучить JS', date: new Date(1996), status: false}
  ];

  getData(): Task[] {
    const data = JSON.parse(localStorage.getItem('tasks'));
    console.log(data);
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
      console.log(localStorage.getItem('tasks'));
      this.data = JSON.parse(localStorage.getItem('tasks'));
      this.data.push(TASK);
      localStorage.setItem('tasks', JSON.stringify(this.data));

    } else {
      this.data.push(TASK);
      localStorage.setItem('tasks', JSON.stringify(this.data));
    }

  }

  changeData(taskId) {
    this.data.forEach( ({id}, index, arr) => {
      if (id === taskId) {
        arr[index].status = !arr[index].status;
      }
    });
  }
}
