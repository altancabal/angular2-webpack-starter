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
<!--<nav class="navbar navbar-toggleable-md navbar-light bg-faded">
  <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand" [routerLink]="['./']" routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}"><img src="/assets/img/logo.svg" width="30" height="30" alt=""></a>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" [routerLink]="['./']" routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">Home <span class="sr-only">(current)</span></a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <button class="btn btn-secondary my-2 my-sm-0">Mas</button>
    </form>
  </div>
</nav>-->

    <main>
      <router-outlet></router-outlet>
    </main>
<div class="container" style="margin-top:20px;">
  <div class="row">
    <div class="col-12 col-md-12">
    <footer>
      <span>Todos los derechos reservados a <a href="http://www.exploradordeviajes.com" class="brand-text-color">ExploradorDeViajes.com</a></span>
      <br><span><a [routerLink]="['./politica-de-privacidad']" routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}" class="brand-text-color">Política de Privacidad</a> y <a [routerLink]="['./terminos-y-condiciones']" routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}" class="brand-text-color">Términos y Condiciones de uso</a></span>
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
