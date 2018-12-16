import { Injectable } from '@angular/core';
import { file } from 'tmp-promise';
import * as fs from 'fs';
import { spawnPromise } from 'spawn-rx';
import { environment } from '../../environments/environment';
import { Snippet } from '../types/snippet';

@Injectable()
export class ExecService {

  constructor() { }

  async exec(snippet: Snippet, request: string) {
    const snippetFile = await file({prefix: 'link-search-', postfix: '.txt'});
    const requestFile = await file({prefix: 'link-search-', postfix: '.txt'});

    fs.writeFile(snippetFile.path, snippet.snippet);
    fs.writeFile(requestFile.path, request);

    let result;

    try {
      result = await spawnPromise(environment.execPath, [
        `--sample`, `${requestFile.path}`,
        `--test`, `${snippetFile.path}`
      ], {
        cwd: environment.cwd,
      });
    } catch (e) {
      console.error(e);
    }

    snippet.score = result.match(/Score = (.+?)$/m)[1];
    snippet.percentage = result.match(/Percent = (.+?)%$/m)[1];

    return snippet;
  }

}
