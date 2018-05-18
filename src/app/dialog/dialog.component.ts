import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  languages = ['English', 'Russian', 'Turkish', 'Kazakh'];
  requestForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<DialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private fb: FormBuilder) {
    this.requestForm = this.fb.group({
      searchText: ['', Validators.required],
      language: ['English', Validators.required],
      pages: [1, [
        Validators.required,
        Validators.min(1),
        Validators.pattern(/\d+/)
      ]],
      tfIdfTextFilename: ['', Validators.required],
      tfIdfThreshold: [0.001, Validators.required],
    });
  }

  ngOnInit() {
  }

}
