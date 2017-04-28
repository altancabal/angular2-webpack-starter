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

  isDebug = false;

  public jsonResponse;
  public jsonString;
  public quotes;

  constructor(
    public request: RequestService
  ) {}
  
  public setVal(val){
    this.jsonResponse = val;
    this.jsonString = JSON.stringify(val);
    this.quotes = this.jsonResponse['quotes'];
    var counter = 0;

    //TODO remove the following part to be configurable or managed by the back end
    for (let quote of this.quotes) {
      console.log(JSON.stringify(quote));
      if(this.quotes[counter]['originPlace'] === 'sjo'){
        this.quotes[counter]['originPlace'] = 'San José';
      }
      counter++;
    }
  }

  public ngOnInit() {
    console.log('hello `Detail` component');
    this.request.getQuotes().subscribe((val) => this.setVal(val));
  }

}
