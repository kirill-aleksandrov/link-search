import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Snippet } from '../types/snippet';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() dataSource: Observable<Snippet[]>;

  constructor() {
  }

  ngOnInit() {
    this.dataSource.subscribe((data) => {
      console.log(data);
    });
  }

}
