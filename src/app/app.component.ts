import { Component } from '@angular/core';
import { TabsService } from './services/tabs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  objectKeys = Object.keys;
  constructor(private tabsService: TabsService) {
  }
}
