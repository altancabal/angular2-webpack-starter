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

  public europeQuotes;
  public quotes;
  public latinamericaQuotes;
  public asiaQuotes;
  public restQuotes;  
  public tmpQuotes;

  constructor(
    public request: RequestService
  ) {}
  
  public setVal(val, destination){
    this.jsonResponse = val;
    this.jsonString = JSON.stringify(val);
    this.tmpQuotes = this.jsonResponse['quotes'];
    var counter = 0;

    //TODO remove the following part to be configurable or managed by the back end
    for (let quote of this.tmpQuotes) {
      console.log(JSON.stringify(this.tmpQuotes));
      if(this.tmpQuotes[counter]['originPlace'] === 'sjo'){
        this.tmpQuotes[counter]['originPlace'] = 'San José';
      }
      if (this.tmpQuotes[counter]['destinationPlace'] === 'atl'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Atlanta';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'lax'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Los Angeles';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'lhr'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Londres';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'cdg'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Paris';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'jfk'){
        this.tmpQuotes[counter]['destinationPlace'] = 'New York';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'mia'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Miami';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'mco'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Orlando';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'yvr'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Vancouver';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'ams'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Amsterdam';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'fra'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Frankfurt';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'mad'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Madrid';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'bcn'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Barcelona';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'bjs'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Beijing';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'dxb'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Dubai';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'hnd'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Tokyo';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'icn'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Seúl';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'bkk'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Bangkok';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'del'){
        this.tmpQuotes[counter]['destinationPlace'] = 'New Delhi';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'mex'){
        this.tmpQuotes[counter]['destinationPlace'] = 'México DF';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'bog'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Bogotá';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'cun'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Cancún';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'lim'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Lima';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'gig'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Rio de Janeiro';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'gua'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Guatemala';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'syd'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Sydney';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'mel'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Melbourne';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'akl'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Auckland';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'jnb'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Johannesburg';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'cai'){
        this.tmpQuotes[counter]['destinationPlace'] = 'El Cairo';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'cmn'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Casablanca';
      }
      counter++;
    }
    if(destination === 'usaandca'){
      this.quotes = this.tmpQuotes;
    } else if (destination == 'europe'){
      this.europeQuotes = this.tmpQuotes;
    } else if (destination == 'latinamerica'){
      this.latinamericaQuotes = this.tmpQuotes;
    } else if (destination == 'asia'){
      this.asiaQuotes = this.tmpQuotes;
    } else if (destination == 'rest'){
      this.restQuotes = this.tmpQuotes;
    }
    
  }

  public ngOnInit() {
    console.log('hello `Detail` component');
    this.request.getQuotes('europe').subscribe((val) => this.setVal(val, 'europe'));
    this.request.getQuotes('usaandca').subscribe((val) => this.setVal(val, 'usaandca'));
    this.request.getQuotes('latinamerica').subscribe((val) => this.setVal(val, 'latinamerica'));
    this.request.getQuotes('asia').subscribe((val) => this.setVal(val, 'asia'));
    this.request.getQuotes('rest').subscribe((val) => this.setVal(val, 'rest'));
  }

}
