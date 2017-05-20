import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './detail.routes';
import { DetailComponent } from './detail.component';

import { FacebookModule } from 'ngx-facebook';

console.log('`Detail` bundle loaded asynchronously');

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    DetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FacebookModule.forRoot(),
    RouterModule.forChild(routes),
  ],
})
export class DetailModule {
  public static routes = routes;
}
