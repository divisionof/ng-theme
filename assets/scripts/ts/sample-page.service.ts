import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SamplePageService {
  constructor(private http: Http) { }

  getPage() {
    return this.http.get('http://ng.dev/wp-json/wp/v2/pages/2');
  }
}
