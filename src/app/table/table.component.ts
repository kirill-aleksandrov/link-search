import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Snippet } from '../types/snippet';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() dataSource: Observable<Snippet[]>;

  constructor(private electronService: ElectronService) {
  }

  openInBrowser(url: string) {
    this.electronService.shell.openExternal(url);
  }

  ngOnInit() {
  }

}
