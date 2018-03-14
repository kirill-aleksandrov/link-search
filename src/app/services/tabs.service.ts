import { Injectable } from '@angular/core';

@Injectable()
export class TabsService {

  public tabs: Array<any> = [
    {
      name: 'Tab 1',
      content: 'Content 1'
    },
    {
      name: 'Tab 2',
      content: 'Content 2'
    }
  ];

  constructor() {
  }

  addTab(name: String, text: String) {
    this.tabs.push({
      name: name,
      content: text
    });
  }

  closeTab(tabKey: number) {
    this.tabs.splice(tabKey, 1);
  }
}
