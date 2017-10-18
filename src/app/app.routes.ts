import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { InfoComponent } from './info';
import { VuelosDesdeComponent } from './vuelos-desde';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'politica-de-privacidad', component: InfoComponent },
  { path: 'terminos-y-condiciones', component: InfoComponent },
  { path: 'preguntas-frecuentes', component: InfoComponent },
  { path: 'vuelos-desde', component: VuelosDesdeComponent },
  { path: 'desde-costa-rica', loadChildren: './+detail#DetailModule'},
  { path: 'desde-nicaragua', loadChildren: './+detail#DetailModule'},
  { path: 'desde-mexico', loadChildren: './+detail#DetailModule'},
  { path: 'desde-colombia', loadChildren: './+detail#DetailModule'},
  { path: 'desde-espana', loadChildren: './+detail#DetailModule'},
  { path: 'desde-argentina', loadChildren: './+detail#DetailModule'},
  { path: 'desde-peru', loadChildren: './+detail#DetailModule'},
  { path: 'desde-venezuela', loadChildren: './+detail#DetailModule'},
  { path: 'desde-chile', loadChildren: './+detail#DetailModule'},
  { path: 'desde-ecuador', loadChildren: './+detail#DetailModule'},
  { path: 'desde-guatemala', loadChildren: './+detail#DetailModule'},
  { path: 'desde-cuba', loadChildren: './+detail#DetailModule'},
  { path: 'desde-bolivia', loadChildren: './+detail#DetailModule'},
  { path: 'desde-republica-dominicana', loadChildren: './+detail#DetailModule'},
  { path: 'desde-honduras', loadChildren: './+detail#DetailModule'},
  { path: 'desde-paraguay', loadChildren: './+detail#DetailModule'},
  { path: 'desde-el-salvador', loadChildren: './+detail#DetailModule'},
  { path: 'desde-puerto-rico', loadChildren: './+detail#DetailModule'},
  { path: 'desde-panama', loadChildren: './+detail#DetailModule'},
  { path: 'desde-uruguay', loadChildren: './+detail#DetailModule'},
  { path: 'desde-fll', loadChildren: './+detail#DetailModule'},
  { path: 'desde-mia', loadChildren: './+detail#DetailModule'},
  { path: 'barrel', loadChildren: './+barrel#BarrelModule'},
  { path: '**',    component: NoContentComponent },
];
