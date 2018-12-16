import { Injectable } from '@angular/core';
import { file } from 'tmp-promise';
import * as fs from 'fs';
import { spawnPromise } from 'spawn-rx';
import { environment } from '../../environments/environment';
import { Snippet } from '../types/snippet';

@Injectable()
export class ExecService {

  constructor() { }

  async exec(/*snippet: Snippet, request: string*/) {
    const snippetFile = await file({prefix: 'link-search-', postfix: '.txt'});
    const requestFile = await file({prefix: 'link-search-', postfix: '.txt'});

    console.log(snippetFile, requestFile);

    fs.writeFile(snippetFile.path, 'What a wonderful world');
    fs.writeFile(requestFile.path, 'What a wonderful world');

    try {
      const stdout = await spawnPromise(environment.execPath, [
        `--sample`, `${requestFile.path}`,
        `--test`, `${snippetFile.path}`
      ], {
        cwd: environment.cwd,
      });
      console.log(stdout);
    } catch (e) {
      console.error(e);
    }
  }

}
