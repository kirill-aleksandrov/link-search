import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Snippet } from '../types/snippet';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class SnippetsService {

  constructor(private http: HttpClient) {
  }

  private getDataFromGoogle(text: string): Observable<Object> {
    return this.http.get('https://www.googleapis.com/customsearch/v1' +
      '?cx=' + environment.google.cx +
      '&key=' + environment.google.key +
      '&start=1' +
      '&q=' + text);
  }

  getSnippets(text: string): Observable<Snippet[]> {
    return this.getDataFromGoogle(text)
      .map((data: any): Snippet[] => {
        return data.items
          .map((item: any): Snippet => {
            return {
              title: item.title,
              link: item.link,
              snippet: item.snippet.replace('\n', '')
            };
          });
      });
  }

}
