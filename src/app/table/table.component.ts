import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  dataSource = [
    {
      title: 'Wikipedia',
      link: 'https://www.wikipedia.org/',
      snippet: 'Wikipedia is a free online encyclopedia, created and edited by volunteers around the world and hosted by the Wikimedia Foundation.'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
