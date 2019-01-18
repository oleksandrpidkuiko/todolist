import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-modal-for-change',
  templateUrl: './modal-for-change.component.html',
  styleUrls: ['./modal-for-change.component.scss']
})
export class ModalForChangeComponent implements OnInit {
  formForChange: FormGroup;

  constructor(
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<ModalForChangeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
    this.formForChange = this.fb.group({
      date: [this.data.date, Validators.required],
      name: [this.data.name, [Validators.required, Validators.minLength(3)]],
    });
  }

  changeData() {
    const newData = {
      ...this.data,
      date: this.formForChange.controls.date.value,
      name: this.formForChange.controls.name.value
    };

    this.dialogRef.close(newData);
  }

}
