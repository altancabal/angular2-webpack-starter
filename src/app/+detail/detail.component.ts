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
      //USA and Canada
      if (this.tmpQuotes[counter]['destinationPlace'] === 'atl'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Atlanta';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'lax'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Los Angeles';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'jfk'){
        this.tmpQuotes[counter]['destinationPlace'] = 'New York';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'mia'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Miami';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'mco'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Orlando';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'yvr'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Vancouver';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'ord'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Chicago';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'den'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Denver';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'sfo'){
        this.tmpQuotes[counter]['destinationPlace'] = 'San Francisco';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'las'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Las Vegas';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'yyz'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Toronto';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'ewr'){
        this.tmpQuotes[counter]['destinationPlace'] = 'New Jersey';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'yul'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Montreal';
      }
      //Europe      
      else if (this.tmpQuotes[counter]['destinationPlace'] === 'lhr'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Londres';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'cdg'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Paris';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'ams'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Amsterdam';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'fra'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Frankfurt';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'mad'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Madrid';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'bcn'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Barcelona';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'lgw'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Londres';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'ist'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Estambul';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'muc'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Múnich';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'fco'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Rome';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'dme'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Moscú';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'cph'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Copenhague';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'dub'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Dublín';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'zrh'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Zúrich';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'osl'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Oslo';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'arn'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Estocolmo';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'lis'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Lisboa';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'bru'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Bruselas';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'txl'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Berlín';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'ath'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Atenas';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'mxp'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Milán';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'prg'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Praga';
      }
      //Asia
      else if (this.tmpQuotes[counter]['destinationPlace'] === 'bjs'){
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
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'hkg'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Hong Kong';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'pvg'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Shanghai';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'sin'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Singapur';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'cgk'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Jakarta';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'kul'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Kuala Lumpur';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'bom'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Mumbai';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'mnl'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Manila';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'doh'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Doha';
      }
      //Latinamerica
      else if (this.tmpQuotes[counter]['destinationPlace'] === 'mex'){
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
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'gru'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Sao Paulo';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'scq'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Santiago';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'pty'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Panamá';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'eze'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Buenos Aires';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'mga'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Managua';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'lpb'){
        this.tmpQuotes[counter]['destinationPlace'] = 'La Paz';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'ccs'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Caracas';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'hav'){
        this.tmpQuotes[counter]['destinationPlace'] = 'La Habana';
      }
      //Rest of the world
      else if (this.tmpQuotes[counter]['destinationPlace'] === 'syd'){
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
