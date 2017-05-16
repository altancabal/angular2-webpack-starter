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

  public countries = [{name: 'Costa Rica', routerLink: './desde-costa-rica', img:'http://adventuresunlimited.net/wp-content/uploads/2016/07/c1.jpg'},
                      {name: 'Nicaragua', routerLink: './desde-nicaragua', img:'http://nica-adventures.com/wp-content/uploads/2016/06/relax-travel-nicaragua.jpg'},
                      {name: 'Mexico', routerLink: './desde-mexico', img:'http://travelhealthpro.org.uk/media_lib/mlib-uploads/full/Mexico.jpg'},
                      {name: 'Colombia', routerLink: './desde-colombia', img:'http://www.enforex.com/img/virtual-tour/colombia/colombia-11.jpg'},
                      {name: 'España', routerLink: './desde-espana', img:'https://media-cdn.tripadvisor.com/media/photo-s/03/9b/30/2e/spain.jpg'},
                      {name: 'Argentina', routerLink: './desde-argentina', img:'http://servicesaws.iadb.org/wmsfiles/images/0x0/country-argentina-32882.jpg'},
                      {name: 'Perú', routerLink: './desde-peru', img:'http://www.globeaware.org/images/wide_inside_scrollers/cusco/22-Volunteer%2BVacations%2Bin%2BPeru%2Bwith%2BGlobe%2BAware.jpg'},
                      {name: 'Venezuela', routerLink: './desde-venezuela', img:'https://images.trvl-media.com/media/content/shared/images/travelguides/destination/193/Venezuela-74748.jpg'},
                      {name: 'Chile', routerLink: './desde-chile', img:'https://www.unf.edu/uploadedImages/aa/coggin/abroad/short/2017/santiago-de-chile.jpg'},
                      {name: 'Ecuador', routerLink: './desde-ecuador', img:'http://www.panalpina.com/content/www/ecu/en/home/_jcr_content/image.spooler.full.607.jpg/1487933222208.jpg'},
                      {name: 'Guatemala', routerLink: './desde-guatemala', img:'https://www.kfw-entwicklungsbank.de/Bilder/Bilderordner/L%C3%A4nder/Lateinamerika-Karibik/Guatemala-2014-Ruinen_topic_stage.jpg'},
                      {name: 'Cuba', routerLink: './desde-cuba', img:'http://www.airtransat.com/getmedia/0cbe9466-5f8f-4786-8308-4728f5430550/Cuba02.jpg?width=980'},
                      {name: 'Bolivia', routerLink: './desde-bolivia', img:'http://www.timeforkids.com/files/styles/tfk_rect_large/public/2013-09/bolivia_ss_la-paz.jpg?itok=hhTH6Bzv'},
                      {name: 'República Dominicana', routerLink: './desde-republica-dominicana', img:'http://www.republica-dominicana-live.com/upload/playa-rincon-republica-dominicana-01.jpg'},
                      {name: 'Honduras', routerLink: './desde-honduras', img:'http://kids.nationalgeographic.com/content/dam/kids/photos/Countries/H-P/honduras-ocean-port.adapt.945.1.jpg'},
                      {name: 'Paraguay', routerLink: './desde-paraguay', img:'http://www.avina.net/avina/wp-content/uploads/2015/11/header-paraguay.jpg'},
                      {name: 'El Salvador', routerLink: './desde-el-salvador', img:'http://www.southtravels.com/gifs/country_banner/elsalvador3.jpg'},
                      {name: 'Puerto Rico', routerLink: './desde-puerto-rico', img:'http://premieroffshore.com/wp-content/uploads/2016/07/resident-of-puerto-rico.jpg'},
                      {name: 'Panamá', routerLink: './desde-panama', img:'http://www.rainforestadventure.com/template/images/products/Panama%20Excursions%20-%20Panama%20City%20and%20Canal%20Tour/2.jpg'},
                      {name: 'Uruguay', routerLink: './desde-uruguay', img:'http://i2.cdn.cnn.com/cnnnext/dam/assets/160118160638-uruguaytravel-beachpuntadeleste-exlarge-169.jpg'}];
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
