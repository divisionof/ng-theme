import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CustomPostsService {
  constructor(private http: Http) { }

  private _wpBase = 'http://ng.dev/wp-json/wp/v2/';

  getPosts() {
    return this.http.get(this._wpBase + 'custom_posts');
  }
}
