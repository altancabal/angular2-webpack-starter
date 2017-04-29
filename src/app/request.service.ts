import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RequestService {

/*private configEndPoint: string =
    'http://exploradordeviajes01.us-east-1.elasticbeanstalk.com/browsequotes/v1.0/cr/usd/es-ES/sjo/lax/anytime/anytime';*/
    private configEndPoint: string =
    'http://localhost:8080/browsequotes/v1.0/cr/usd/es-ES/sjo/usaandca/anytime/anytime';

    private hostUrl: string = 'http://exploradordeviajes01.us-east-1.elasticbeanstalk.com';
    private initialParamsUrl: string = '/browsequotes/v1.0/cr/usd/es-ES/sjo/';
    private finalParamsUrl: string = '/anytime/anytime';

  constructor (private http: Http) {  }

  public getQuotes(destination) {
    return this.http
      .get(this.hostUrl + this.initialParamsUrl + destination + this.finalParamsUrl)
      //.get(this.configEndPoint)
      .map((res) => (res.json()));
  }

}
