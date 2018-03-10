import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '200px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('Dialog closed');
    });
  }

  ngOnInit() {
  }

}
