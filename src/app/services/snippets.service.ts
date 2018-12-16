import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Snippet } from '../types/snippet';
import 'rxjs/add/operator/map';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { environment } from '../../environments/environment';
import * as _ from 'lodash';

@Injectable()
export class SnippetsService {

  constructor(private http: HttpClient) {
  }

  private getPageFromGoogle(text: string, page: number): Observable<Object> {
    return this.http.get('https://www.googleapis.com/customsearch/v1' +
      '?cx=' + environment.google.cx +
      '&key=' + environment.google.key +
      '&start=' + ((page - 1) * 10 + 1) +
      '&q=' + text);
  }

  private filterData(page: Observable<Object>): Observable<Snippet[]> {
    return page.map((data: any): Snippet[] => { // observable map

      return data.items
        .map((item: any): Snippet => {        // array map
          return {
            title: item.title,
            link: item.link,
            snippet: item.snippet.replace('\n', ''),
            score: undefined,
            percentage: undefined,
          };
        });

    });
  }

  private getPageSnippets(request: string, page: number): Observable<Snippet[]> {
    return this.filterData(this.getPageFromGoogle(request, page));
  }

  getSnippets(request: string, pages: number) {
    pages = Number(pages);
    console.log(_.range(1, pages + 1), '1');
    const pagesObservables = _.range(1, pages + 1)
      .map((page: number): Observable<Snippet[]> => {
        return this.getPageSnippets(request, page);
      });

    return forkJoin(pagesObservables)
      .map((results) => _.flatten(results));
  }

}
