/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
  <!--
  <div class="container" style="margin-top:20px;">
  <div class="row">
    <div class="col-12 col-md-12">
    <nav>      
      <a [routerLink]=" ['./'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Inicio
      </a>
      <a [routerLink]=" ['./desde-costa-rica'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Costa Rica
      </a>
    </nav>
</div></div></div>-->

    <main>
      <router-outlet></router-outlet>
    </main>
<div class="container" style="margin-top:20px;">
  <div class="row">
    <div class="col-12 col-md-12">
    <footer>
      <span>Todos los derechos reservados a <a href="http://www.exploradordeviajes.com" class="brand-text-color">ExploradorDeViajes.com</a></span>
    </footer>
    </div></div></div>
  `
})
export class AppComponent implements OnInit {
  public angularclassLogo = 'assets/img/angularclass-avatar.png';
  public name = 'Angular 2 Webpack Starter';
  public url = 'https://twitter.com/AngularClass';

  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
