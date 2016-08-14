import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { WP_API_URL } from '../services/data-access.service';

@Injectable()
export class SamplePageService {
  constructor(private http: Http) { }

  private _wpBase: string = WP_API_URL;

  getPage() {
    return this.http.get(this._wpBase + 'pages/2');
  }
}
