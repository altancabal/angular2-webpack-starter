import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../app.service';
import { Title } from './title';
import { XLargeDirective } from './x-large';

import { RequestService } from '../request.service';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    Title, RequestService
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './home.component.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  // Set our default values
  public localState = { value: '' };

  public countries = [{name: 'Costa Rica', routerLink: 'http://eepurl.com/cM8jVT', img:'http://adventuresunlimited.net/wp-content/uploads/2016/07/c1.jpg'},
                      {name: 'Colombia', routerLink: 'http://eepurl.com/cSi7lr', img:'http://www.enforex.com/img/virtual-tour/colombia/colombia-11.jpg'},
                      {name: 'Mexico', routerLink: 'http://eepurl.com/cSi6vj', img:'http://travelhealthpro.org.uk/media_lib/mlib-uploads/full/Mexico.jpg'},
                      {name: 'Nicaragua', routerLink: 'http://eepurl.com/cXcptr', img:'http://nica-adventures.com/wp-content/uploads/2016/06/relax-travel-nicaragua.jpg'},
                      {name: 'España', routerLink: 'http://eepurl.com/cXcpqH', img:'https://media-cdn.tripadvisor.com/media/photo-s/03/9b/30/2e/spain.jpg'},
                      {name: 'Argentina', routerLink: 'http://eepurl.com/cXcpp5', img:'http://servicesaws.iadb.org/wmsfiles/images/0x0/country-argentina-32882.jpg'},
                      {name: 'Perú', routerLink: 'http://eepurl.com/cXcpoP', img:'http://www.globeaware.org/images/wide_inside_scrollers/cusco/22-Volunteer%2BVacations%2Bin%2BPeru%2Bwith%2BGlobe%2BAware.jpg'},
                      {name: 'Venezuela', routerLink: 'http://eepurl.com/cXcpoz', img:'https://images.trvl-media.com/media/content/shared/images/travelguides/destination/193/Venezuela-74748.jpg'},
                      {name: 'Chile', routerLink: 'http://eepurl.com/cXcpm9', img:'https://www.unf.edu/uploadedImages/aa/coggin/abroad/short/2017/santiago-de-chile.jpg'},
                      {name: 'Ecuador', routerLink: 'http://eepurl.com/cXcplL', img:'http://www.panalpina.com/content/www/ecu/en/home/_jcr_content/image.spooler.full.607.jpg/1487933222208.jpg'},
                      {name: 'Guatemala', routerLink: 'http://eepurl.com/cXcpjL', img:'https://www.kfw-entwicklungsbank.de/Bilder/Bilderordner/L%C3%A4nder/Lateinamerika-Karibik/Guatemala-2014-Ruinen_topic_stage.jpg'},
                      {name: 'Cuba', routerLink: 'http://eepurl.com/cXcpin', img:'http://www.airtransat.com/getmedia/0cbe9466-5f8f-4786-8308-4728f5430550/Cuba02.jpg?width=980'},
                      {name: 'Bolivia', routerLink: 'http://eepurl.com/cXcpib', img:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Ausangate-hillside-MT.jpg/800px-Ausangate-hillside-MT.jpg'},
                      {name: 'República Dominicana', routerLink: 'http://eepurl.com/cXcpgP', img:'http://www.republica-dominicana-live.com/upload/playa-rincon-republica-dominicana-01.jpg'},
                      {name: 'Honduras', routerLink: 'http://eepurl.com/cXcpfj', img:'http://kids.nationalgeographic.com/content/dam/kids/photos/Countries/H-P/honduras-ocean-port.adapt.945.1.jpg'},
                      {name: 'Paraguay', routerLink: 'http://eepurl.com/cXcpcP', img:'http://www.avina.net/avina/wp-content/uploads/2015/11/header-paraguay.jpg'},
                      {name: 'El Salvador', routerLink: 'http://eepurl.com/cXcpa5', img:'https://userscontent2.emaze.com/images/cb895435-c066-487b-9165-673aec192a8b/f80eeac00142261a49cd1d2c16fca71a.jpg'},
                      {name: 'Puerto Rico', routerLink: 'http://eepurl.com/cXco_P', img:'http://premieroffshore.com/wp-content/uploads/2016/07/resident-of-puerto-rico.jpg'},
                      {name: 'Panamá', routerLink: 'http://eepurl.com/cXco-X', img:'http://www.rainforestadventure.com/template/images/products/Panama%20Excursions%20-%20Panama%20City%20and%20Canal%20Tour/2.jpg'},
                      {name: 'Uruguay', routerLink: 'http://eepurl.com/cXAPKX', img:'http://i2.cdn.cnn.com/cnnnext/dam/assets/160118160638-uruguaytravel-beachpuntadeleste-exlarge-169.jpg'}];
  // TypeScript public modifiers
  constructor(
    public appState: AppState,
    public title: Title,
    public request: RequestService
  ) {}

  public ngOnInit() {
    console.log('hello `Home` component');
    // this.title.getData().subscribe(data => this.data = data);
  }

  public submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}
