import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RequestService {

private configEndPoint: string =
    'http://exploradordeviajes01.us-east-1.elasticbeanstalk.com/browsequotes/v1.0/cr/usd/es-ES/sjo/lax/anytime/anytime';
    /*private configEndPoint: string =
    'http://localhost:8080/browsequotes/v1.0/cr/usd/es-ES/sjo/lax/anytime/anytime';*/

  constructor (private http: Http) {  }

  public getQuotes() {
    return this.http
      .get(this.configEndPoint)
      .map((res) => (res.json()));
  }

}
