import { Component, OnInit } from '@angular/core';
import { TabsService } from '../services/tabs.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  objectKeys = Object.keys;

  constructor(private tabsService: TabsService) { }

  ngOnInit() {
  }

}
