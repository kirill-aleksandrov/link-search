import { Injectable } from '@angular/core';
import { Tab } from '../types/tab';
import { SnippetsService } from './snippets.service';

@Injectable()
export class TabsService {

  public tabs: Tab[] = [];

  constructor(private snippetService: SnippetsService) {
  }

  addTab(tab: Tab) {
    this.tabs.push(tab);
  }

  closeTab(tabKey: number) {
    this.tabs.splice(tabKey, 1);
  }
}
