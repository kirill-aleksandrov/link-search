import { Component } from '@angular/core';
import { SnippetsService } from './services/snippets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private snippetsService: SnippetsService) {
    /*this.snippetsService.getSnippets('wikipedia')
      .subscribe((snippets) => {
        console.log(snippets);
      });*/
  }
}
