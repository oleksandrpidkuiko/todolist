import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {
  @Input() task;
  @Output() taskSelected: EventEmitter<any> = new EventEmitter();
  @Output() removeTask: EventEmitter<any> = new EventEmitter();
  @Output() changeTask: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeTaskFromList(id: string) {
    this.removeTask.emit(id);
  }

  changeTaskFromList(id: string) {
    this.changeTask.emit(id);
  }

  selectTask() {
    this.taskSelected.emit();
  }
}
