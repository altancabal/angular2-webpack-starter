import {
  Component,
  OnInit
} from '@angular/core';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */
import { RequestService } from '../request.service';
import { Router, NavigationEnd } from '@angular/router';

console.log('`Detail` component loaded asynchronously');

declare var window: any;

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

  public originAirport;
  public country;

  constructor(
    public request: RequestService,
    private router: Router
  ) {

      /*
      (window as any)['FB'] = {
        init: (params: "") => params,
        login: () => {}
      };
*/
      
  }
  
  private getFormattedDate(unformattedDate){
    var dateParts = unformattedDate.split("-");
    return dateParts[2] + "-" + this.getMonthName(dateParts[1]) + "-" + dateParts[0];
  }

  private getMonthName(monthNumber){
    var monthName;
    switch(monthNumber) { 
      case "01": { 
          monthName = "Ene";
          break; 
      }
      case "02": { 
          monthName = "Feb";
          break; 
      }
      case "03": { 
          monthName = "Mar";
          break; 
      }
      case "04": { 
          monthName = "Abr";
          break; 
      }
      case "05": { 
          monthName = "May";
          break; 
      }
      case "06": { 
          monthName = "Jun";
          break; 
      }
      case "07": { 
          monthName = "Jul";
          break; 
      }
      case "08": { 
          monthName = "Ago";
          break; 
      }
      case "09": { 
          monthName = "Sep";
          break; 
      }
      case "10": { 
          monthName = "Oct";
          break; 
      }
      case "11": { 
          monthName = "Nov";
          break; 
      }
      case "12": { 
          monthName = "Dic";
          break; 
      }
      default: {
          break; 
      } 
    }
    return monthName; 
  }

  public setVal(val, destination){
    this.jsonResponse = val;
    this.jsonString = JSON.stringify(val);
    this.tmpQuotes = this.jsonResponse['quotes'];
    var counter = 0;

    //TODO remove the following part to be configurable or managed by the back end
    for (let quote of this.tmpQuotes) {
      //console.log(JSON.stringify(this.tmpQuotes)); //DEBUG

      this.tmpQuotes[counter]['inboundDate'] = this.getFormattedDate(this.tmpQuotes[counter]['inboundDate']);
      this.tmpQuotes[counter]['outboundDate'] = this.getFormattedDate(this.tmpQuotes[counter]['outboundDate']);

      //Origin places
      if(this.tmpQuotes[counter]['originPlace'].toLowerCase() === 'sjo'){
        this.tmpQuotes[counter]['originPlace'] = 'San José';
      } else if(this.tmpQuotes[counter]['originPlace'].toLowerCase() === 'mga') {
        this.tmpQuotes[counter]['originPlace'] = 'Managua';
      } else if(this.tmpQuotes[counter]['originPlace'].toLowerCase() === 'mex') {
        this.tmpQuotes[counter]['originPlace'] = 'Ciudad de México';
      } else if(this.tmpQuotes[counter]['originPlace'].toLowerCase() === 'bog') {
        this.tmpQuotes[counter]['originPlace'] = 'Bogotá';
      } else if(this.tmpQuotes[counter]['originPlace'].toLowerCase() === 'mad') {
        this.tmpQuotes[counter]['originPlace'] = 'Madrid';
      } else if(this.tmpQuotes[counter]['originPlace'].toLowerCase() === 'bcn') {
        this.tmpQuotes[counter]['originPlace'] = 'Barcelona';
      } else if(this.tmpQuotes[counter]['originPlace'].toLowerCase() === 'eze') {
        this.tmpQuotes[counter]['originPlace'] = 'Buenos Aires';
      } else if(this.tmpQuotes[counter]['originPlace'].toLowerCase() === 'lim') {
        this.tmpQuotes[counter]['originPlace'] = 'Lima';
      } else if(this.tmpQuotes[counter]['originPlace'].toLowerCase() === 'ccs') {
        this.tmpQuotes[counter]['originPlace'] = 'Caracas';
      } else if(this.tmpQuotes[counter]['originPlace'].toLowerCase() === 'scl') {
        this.tmpQuotes[counter]['originPlace'] = 'Santiago';
      } else if(this.tmpQuotes[counter]['originPlace'].toLowerCase() === 'uio') {
        this.tmpQuotes[counter]['originPlace'] = 'Quito';
      } else if(this.tmpQuotes[counter]['originPlace'].toLowerCase() === 'gye') {
        this.tmpQuotes[counter]['originPlace'] = 'Guayaquil';
      } else if(this.tmpQuotes[counter]['originPlace'].toLowerCase() === 'gua') {
        this.tmpQuotes[counter]['originPlace'] = 'Guatemala';
      } else if(this.tmpQuotes[counter]['originPlace'].toLowerCase() === 'hav') {
        this.tmpQuotes[counter]['originPlace'] = 'La Habana';
      } else if(this.tmpQuotes[counter]['originPlace'].toLowerCase() === 'vvi') {
        this.tmpQuotes[counter]['originPlace'] = 'Santa Cruz';
      } else if(this.tmpQuotes[counter]['originPlace'].toLowerCase() === 'lpb') {
        this.tmpQuotes[counter]['originPlace'] = 'La Paz';
      } else if(this.tmpQuotes[counter]['originPlace'].toLowerCase() === 'sdq') {
        this.tmpQuotes[counter]['originPlace'] = 'Santo Domingo';
      } else if(this.tmpQuotes[counter]['originPlace'].toLowerCase() === 'sap') {
        this.tmpQuotes[counter]['originPlace'] = 'San Pedro Sula';
      } else if(this.tmpQuotes[counter]['originPlace'].toLowerCase() === 'tgu') {
        this.tmpQuotes[counter]['originPlace'] = 'Tegucigalpa';
      } else if(this.tmpQuotes[counter]['originPlace'].toLowerCase() === 'asu') {
        this.tmpQuotes[counter]['originPlace'] = 'Asunción';
      } else if(this.tmpQuotes[counter]['originPlace'].toLowerCase() === 'sal') {
        this.tmpQuotes[counter]['originPlace'] = 'San Salvador';
      } else if(this.tmpQuotes[counter]['originPlace'].toLowerCase() === 'sju') {
        this.tmpQuotes[counter]['originPlace'] = 'San Juan';
      } else if(this.tmpQuotes[counter]['originPlace'].toLowerCase() === 'pty') {
        this.tmpQuotes[counter]['originPlace'] = 'Panamá';
      } else if(this.tmpQuotes[counter]['originPlace'].toLowerCase() === 'mvd') {
        this.tmpQuotes[counter]['originPlace'] = 'Montevideo';
      } else if(this.tmpQuotes[counter]['originPlace'].toLowerCase() === 'fll') {
        this.tmpQuotes[counter]['originPlace'] = 'Fort Lauderdale';
      } else if(this.tmpQuotes[counter]['originPlace'].toLowerCase() === 'mia') {
        this.tmpQuotes[counter]['originPlace'] = 'Miami';
      }

      //Destination places
      //USA and Canada
      if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'atl'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Atlanta';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'lax'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Los Ángeles';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'jfk'){
        this.tmpQuotes[counter]['destinationPlace'] = 'New York';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'mia'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Miami';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'mco'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Orlando';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'yvr'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Vancouver';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'ord'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Chicago';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'den'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Denver';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'sfo'){
        this.tmpQuotes[counter]['destinationPlace'] = 'San Francisco';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'las'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Las Vegas';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'yyz'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Toronto';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'ewr'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Newark';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'yul'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Montreal';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'hnl'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Hawaii';
      } else if(this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'bwi') {
        this.tmpQuotes[counter]['destinationPlace'] = 'Baltimore (Washington)';
      } else if(this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'dfw') {
        this.tmpQuotes[counter]['destinationPlace'] = 'Dallas';
      } else if(this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'ewr') {
        this.tmpQuotes[counter]['destinationPlace'] = 'Newark (New York)';
      } else if(this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'fll') {
        this.tmpQuotes[counter]['destinationPlace'] = 'Fort Lauderdale';
      }
      //Europe      
      else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'lhr'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Londres';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'cdg'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Paris';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'ams'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Ámsterdam';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'fra'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Frankfurt';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'mad'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Madrid';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'bcn'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Barcelona';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'lgw'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Londres';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'ist'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Estambul';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'muc'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Múnich';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'fco'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Roma';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'dme'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Moscú';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'cph'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Copenhague';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'dub'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Dublín';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'zrh'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Zúrich';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'osl'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Oslo';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'arn'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Estocolmo';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'lis'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Lisboa';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'bru'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Bruselas';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'txl'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Berlín';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'ath'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Atenas';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'mxp'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Milán';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'prg'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Praga';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'kef'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Reikiavik';
      }
      //Asia
      else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'pek'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Beijing';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'dxb'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Dubai';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'hnd'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Tokyo';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'icn'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Seúl';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'bkk'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Bangkok';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'del'){
        this.tmpQuotes[counter]['destinationPlace'] = 'New Delhi';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'hkg'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Hong Kong';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'pvg'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Shanghai';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'sin'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Singapur';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'cgk'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Jakarta';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'kul'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Kuala Lumpur';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'bom'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Mumbai';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'mnl'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Manila';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'doh'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Doha';
      }
      //Latinamerica
      else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'sjo'){
        this.tmpQuotes[counter]['destinationPlace'] = 'San José, Costa Rica';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'mex'){
        this.tmpQuotes[counter]['destinationPlace'] = 'México DF';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'bog'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Bogotá';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'cun'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Cancún';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'lim'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Lima';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'gig'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Rio de Janeiro';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'gua'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Guatemala';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'gru'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Sao Paulo';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'scq'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Santiago';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'pty'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Panamá';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'eze'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Buenos Aires';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'mga'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Managua';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'lpb'){
        this.tmpQuotes[counter]['destinationPlace'] = 'La Paz';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'ccs'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Caracas';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'hav'){
        this.tmpQuotes[counter]['destinationPlace'] = 'La Habana';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'scl'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Santiago';
      }
      //Rest of the world
      else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'syd'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Sydney';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'mel'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Melbourne';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'akl'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Auckland';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'jnb'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Johannesburg';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'cai'){
        this.tmpQuotes[counter]['destinationPlace'] = 'El Cairo';
      } else if (this.tmpQuotes[counter]['destinationPlace'].toLowerCase() === 'cmn'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Casablanca';
      }
      counter++;
    }
    this.tmpQuotes.sort((a, b) => {
        if (parseInt(a.price) < parseInt(b.price)){ console.log("a.price:"+a.price); return -1;} 
        else if (parseInt(a.price) > parseInt(b.price)) return 1;
        else return 0;
    });
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
      //window.FB.XFBML.parse(); //Reload Facebook plugin

      this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });

      this.router.events.subscribe((url:any) => console.log(url));
      console.log("ROUTER"+this.router.url);  // to print only path eg:"/login"
      if(this.router.url === "/desde-costa-rica"){
        this.originAirport = "sjo";
        this.country = "Costa Rica";
      } else if (this.router.url === "/desde-nicaragua"){
        this.originAirport = "mga";
        this.country = "Nicaragua";
      } else if (this.router.url === "/desde-mexico"){
        this.originAirport = "mex";
        this.country = "México";
      } else if (this.router.url === "/desde-colombia"){
        this.originAirport = "bog";
        this.country = "Colombia";
      } else if (this.router.url === "/desde-espana"){
        this.originAirport = "mad";
        this.country = "España";
      } else if (this.router.url === "/desde-argentina"){
        this.originAirport = "eze";
        this.country = "Argentina";
      } else if (this.router.url === "/desde-peru"){
        this.originAirport = "lim";
        this.country = "Perú";
      } else if (this.router.url === "/desde-venezuela"){
        this.originAirport = "ccs";
        this.country = "Venezuela";
      } else if (this.router.url === "/desde-chile"){
        this.originAirport = "scl";
        this.country = "Chile";
      } else if (this.router.url === "/desde-ecuador"){
        this.originAirport = "uio";
        this.country = "Ecuador";
      } else if (this.router.url === "/desde-guatemala"){
        this.originAirport = "gua";
        this.country = "Guatemala";
      } else if (this.router.url === "/desde-cuba"){
        this.originAirport = "hav";
        this.country = "Cuba";
      } else if (this.router.url === "/desde-bolivia"){
        this.originAirport = "lpb";
        this.country = "Bolivia";
      } else if (this.router.url === "/desde-republica-dominicana"){
        this.originAirport = "sdq";
        this.country = "República Dominicana";
      } else if (this.router.url === "/desde-honduras"){
        this.originAirport = "tgu";
        this.country = "Honduras";
      } else if (this.router.url === "/desde-paraguay"){
        this.originAirport = "asu";
        this.country = "Paraguay";
      } else if (this.router.url === "/desde-el-salvador"){
        this.originAirport = "sal";
        this.country = "El Salvador";
      } else if (this.router.url === "/desde-puerto-rico"){
        this.originAirport = "sju";
        this.country = "Puerto Rico";
      } else if (this.router.url === "/desde-panama"){
        this.originAirport = "pty";
        this.country = "Panamá";
      } else if (this.router.url === "/desde-uruguay"){
        this.originAirport = "mvd";
        this.country = "Uruguay";
      } else if (this.router.url === "/desde-mia"){
        this.originAirport = "mia";
        this.country = "Miami";
      } else if (this.router.url === "/desde-fll"){
        this.originAirport = "fll";
        this.country = "Fort Lauderdale";
      }

    this.request.getQuotes(this.originAirport, 'europe').subscribe((val) => this.setVal(val, 'europe'));
    this.request.getQuotes(this.originAirport, 'usaandca').subscribe((val) => this.setVal(val, 'usaandca'));
    this.request.getQuotes(this.originAirport, 'latinamerica').subscribe((val) => this.setVal(val, 'latinamerica'));
    this.request.getQuotes(this.originAirport, 'asia').subscribe((val) => this.setVal(val, 'asia'));
    this.request.getQuotes(this.originAirport, 'rest').subscribe((val) => this.setVal(val, 'rest'));
  }

}
