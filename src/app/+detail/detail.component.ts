import {
  Component,
  OnInit,
  NgZone
} from '@angular/core';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */
import { RequestService } from '../request.service';
import { Router, NavigationEnd } from '@angular/router';
import { FacebookModule } from 'ngx-facebook';

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

      if(this.tmpQuotes[counter]['originPlace'] === 'sjo'){
        this.tmpQuotes[counter]['originPlace'] = 'San José';
      } else if(this.tmpQuotes[counter]['originPlace'] === 'mga') {
        this.tmpQuotes[counter]['originPlace'] = 'Managua';
      } else if(this.tmpQuotes[counter]['originPlace'] === 'mex') {
        this.tmpQuotes[counter]['originPlace'] = 'Ciudad de México';
      } else if(this.tmpQuotes[counter]['originPlace'] === 'bog') {
        this.tmpQuotes[counter]['originPlace'] = 'Bogotá';
      } else if(this.tmpQuotes[counter]['originPlace'] === 'mad') {
        this.tmpQuotes[counter]['originPlace'] = 'Madrid';
      } else if(this.tmpQuotes[counter]['originPlace'] === 'bcn') {
        this.tmpQuotes[counter]['originPlace'] = 'Barcelona';
      } else if(this.tmpQuotes[counter]['originPlace'] === 'eze') {
        this.tmpQuotes[counter]['originPlace'] = 'Buenos Aires';
      } else if(this.tmpQuotes[counter]['originPlace'] === 'lim') {
        this.tmpQuotes[counter]['originPlace'] = 'Lima';
      } else if(this.tmpQuotes[counter]['originPlace'] === 'ccs') {
        this.tmpQuotes[counter]['originPlace'] = 'Caracas';
      } else if(this.tmpQuotes[counter]['originPlace'] === 'scl') {
        this.tmpQuotes[counter]['originPlace'] = 'Santiago';
      } else if(this.tmpQuotes[counter]['originPlace'] === 'uio') {
        this.tmpQuotes[counter]['originPlace'] = 'Quito';
      } else if(this.tmpQuotes[counter]['originPlace'] === 'gye') {
        this.tmpQuotes[counter]['originPlace'] = 'Guayaquil';
      } else if(this.tmpQuotes[counter]['originPlace'] === 'gua') {
        this.tmpQuotes[counter]['originPlace'] = 'Guatemala';
      } else if(this.tmpQuotes[counter]['originPlace'] === 'hav') {
        this.tmpQuotes[counter]['originPlace'] = 'La Habana';
      } else if(this.tmpQuotes[counter]['originPlace'] === 'vvi') {
        this.tmpQuotes[counter]['originPlace'] = 'Santa Cruz';
      } else if(this.tmpQuotes[counter]['originPlace'] === 'lpb') {
        this.tmpQuotes[counter]['originPlace'] = 'La Paz';
      } else if(this.tmpQuotes[counter]['originPlace'] === 'sdq') {
        this.tmpQuotes[counter]['originPlace'] = 'Santo Domingo';
      } else if(this.tmpQuotes[counter]['originPlace'] === 'sap') {
        this.tmpQuotes[counter]['originPlace'] = 'San Pedro Sula';
      } else if(this.tmpQuotes[counter]['originPlace'] === 'tgu') {
        this.tmpQuotes[counter]['originPlace'] = 'Tegucigalpa';
      } else if(this.tmpQuotes[counter]['originPlace'] === 'asu') {
        this.tmpQuotes[counter]['originPlace'] = 'Asunción';
      } else if(this.tmpQuotes[counter]['originPlace'] === 'sal') {
        this.tmpQuotes[counter]['originPlace'] = 'San Salvador';
      } else if(this.tmpQuotes[counter]['originPlace'] === 'sju') {
        this.tmpQuotes[counter]['originPlace'] = 'San Juan';
      } else if(this.tmpQuotes[counter]['originPlace'] === 'pty') {
        this.tmpQuotes[counter]['originPlace'] = 'Panamá';
      } else if(this.tmpQuotes[counter]['originPlace'] === 'mvd') {
        this.tmpQuotes[counter]['originPlace'] = 'Montevideo';
      }
      //USA and Canada
      if (this.tmpQuotes[counter]['destinationPlace'] === 'atl'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Atlanta';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'lax'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Los Ángeles';
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
        this.tmpQuotes[counter]['destinationPlace'] = 'Newark';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'yul'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Montreal';
      } else if (this.tmpQuotes[counter]['destinationPlace'] === 'hnl'){
        this.tmpQuotes[counter]['destinationPlace'] = 'Hawaii';
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
        this.tmpQuotes[counter]['destinationPlace'] = 'Roma';
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
      else if (this.tmpQuotes[counter]['destinationPlace'] === 'pek'){
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
      else if (this.tmpQuotes[counter]['destinationPlace'] === 'sjo'){
        this.tmpQuotes[counter]['destinationPlace'] = 'San José, Costa Rica';
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
      }

    this.request.getQuotes(this.originAirport, 'europe').subscribe((val) => this.setVal(val, 'europe'));
    this.request.getQuotes(this.originAirport, 'usaandca').subscribe((val) => this.setVal(val, 'usaandca'));
    this.request.getQuotes(this.originAirport, 'latinamerica').subscribe((val) => this.setVal(val, 'latinamerica'));
    this.request.getQuotes(this.originAirport, 'asia').subscribe((val) => this.setVal(val, 'asia'));
    this.request.getQuotes(this.originAirport, 'rest').subscribe((val) => this.setVal(val, 'rest'));

    window.FB.XFBML.parse(); //Reload Facebook plugin
  }

}
