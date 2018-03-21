import { Injectable } from '@angular/core';
import { Tab } from '../types/tab';
import { SnippetsService } from './snippets.service';

@Injectable()
export class TabsService {

  public tabs: Tab[] = [];

  constructor(private snippetService: SnippetsService) {
  }

  addTab(name: string, text: string) {
    this.tabs.push({
      title: name,
      data: this.snippetService.getSnippets(text)
    });
    console.log(this.tabs);
  }

  closeTab(tabKey: number) {
    this.tabs.splice(tabKey, 1);
  }
}
