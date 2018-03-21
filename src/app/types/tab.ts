import { Observable } from 'rxjs/Observable';
import { Snippet } from './snippet';

export class Tab {
  title: string;
  data: Observable<Snippet[]>;
}
