import { Injectable } from '@angular/core';
import { Snippet } from '../types/snippet';
import { spawnPromise } from 'spawn-rx';
import { environment } from '../../environments/environment';

@Injectable()
export class ExecService {

  constructor() { }

  async exec(/*snippet: Snippet, request: string*/) {
    try {
      const stdout = await spawnPromise(environment.execPath, ['-h']);
      console.log(stdout);
    } catch (e) {
      console.error(e);
    }
  }

}
