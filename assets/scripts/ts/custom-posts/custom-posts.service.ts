import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { WP_API_URL } from '../services/data-access.service';

@Injectable()
export class CustomPostsService {
  constructor(private http: Http) { }

  private _wpBase: string = WP_API_URL;

  getPosts() {
    return this.http.get(this._wpBase + 'custom_posts');
  }
}
