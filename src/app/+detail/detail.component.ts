import {
  Component,
  OnInit,
} from '@angular/core';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */
import { RequestService } from '../request.service';

console.log('`Detail` component loaded asynchronously');

@Component({
  selector: 'detail',
  providers: [
    RequestService
  ],
  templateUrl: './detail.component.html',
})
export class DetailComponent implements OnInit {
  jsonResponse;

  constructor(
    public request: RequestService
  ) {}

  public ngOnInit() {
    console.log('hello `Detail` component');
    this.request.getQuotes().subscribe((val) => this.jsonResponse = JSON.stringify(val));
  }

}
