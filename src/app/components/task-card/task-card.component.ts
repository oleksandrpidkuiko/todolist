import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {MatDialog} from '@angular/material';
import {ModalForChangeComponent} from '../modal-for-change/modal-for-change.component';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {
  @Input() task;
  @Output() taskState: EventEmitter<any> = new EventEmitter();
  @Output() removeTask: EventEmitter<any> = new EventEmitter();
  @Output() changeTask: EventEmitter<any> = new EventEmitter();

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  removeTaskFromList(id: string) {
    this.removeTask.emit(id);
  }

  changeTaskState(id: string) {
    this.taskState.emit(id);
  }

  changeTaskData() {
    const dialogRef = this.dialog.open(ModalForChangeComponent, {
      width: '250px',
      data: this.task
    });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.changeTask.emit(result);
        console.log(result);
      }
    });
  }
}
