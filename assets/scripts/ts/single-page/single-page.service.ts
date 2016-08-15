import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { WP_API_URL } from '../services/data-access.service';

@Injectable()
export class SinglePageService {
  constructor(private http: Http) { }

  private _wpBase: string = WP_API_URL;

  getPage(route) {
    return this.http.get(this._wpBase + 'pages?filter[name]=' + route);
  }
}
