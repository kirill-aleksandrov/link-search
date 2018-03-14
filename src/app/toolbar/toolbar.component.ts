import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { TabsService } from '../services/tabs.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(public dialog: MatDialog, private tabsService: TabsService) { }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe((object) => {
      if (object) {
        this.tabsService.addTab(object.searchText, object.searchText);
      }
    });
  }

  ngOnInit() {
  }

}
