import { Component, OnInit } from '@angular/core';
import { CustomPostsService } from './custom-posts.service';

@Component({
  selector: 'custom-posts',
  template: `
    <h2>Custom Posts</h2>
    <ul *ngIf="posts">
      <li *ngFor="let post of posts">
        <h1>{{ post.title.rendered }}</h1>
      </li>
    </ul>
  `,
  providers: [CustomPostsService]
})
export class CustomPostsComponent implements OnInit {
  constructor(private _customPostsService: CustomPostsService) { }
  posts: Array<string>;

  ngOnInit() {
    this.listPosts();
  }

  listPosts() {
    this._customPostsService.getPosts()
        .subscribe(res => {this.posts = res.json()});
  }
}
