import {
  Component,
  OnInit
} from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'info',
  styles: [`
  `],
  templateUrl: './info.component.html',
})
export class InfoComponent implements OnInit {

  private pageType;
  private title;

  constructor(
    public router: Router
  ) {}

  public ngOnInit() {
    if(this.router.url === "/politica-de-privacidad"){
        this.pageType = "politica-de-privacidad";
        this.title = "Política de Privacidad";
      } else if (this.router.url === "/terminos-y-condiciones"){
        this.pageType = "terminos-y-condiciones";
        this.title = "Términos y Condiciones de uso";
      } else if (this.router.url === "/preguntas-frecuentes"){
        this.pageType = "preguntas-frecuentes";
        this.title = "Preguntas frecuentes";
      }
  }

}
