import { Component } from '@angular/core';
import { TabsService } from './services/tabs.service';
import { SnippetsService } from './services/snippets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  objectKeys = Object.keys;
  constructor(private tabsService: TabsService, private snippetsService: SnippetsService) {
    /*this.snippetsService.getSnippets('wikipedia')
      .subscribe((snippets) => {
        console.log(snippets);
      });*/
  }
}
