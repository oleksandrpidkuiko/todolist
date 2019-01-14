import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-task-creator',
  templateUrl: './task-creator.component.html',
  styleUrls: ['./task-creator.component.scss']
})
export class TaskCreatorComponent implements OnInit {
  @Output() addTask: EventEmitter<any> = new EventEmitter();

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      date: [null, Validators.required],
      name: [null, [Validators.required, Validators.minLength(3)]],
    });
  }

  addTaskFromList() {
    const event = {
      name: this.form.controls.name.value,
      date: this.form.controls.date.value,
    };

    if (this.form.valid) {
      this.addTask.emit(event);
    }
  }

}
