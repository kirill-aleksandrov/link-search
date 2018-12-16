import { Injectable } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material';
import { TabsService } from './tabs.service';
import { SnippetsService } from './snippets.service';

@Injectable()
export class DialogService {

  constructor(private dialog: MatDialog,
              private tabsService: TabsService,
              private snippetService: SnippetsService) {
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe((object) => {
      if (object) {
        this.tabsService.addTab({
          title: object.searchText,
          data: this.snippetService.getSnippets(object.searchText, object.pages)
        });
      }
    });
  }

}
