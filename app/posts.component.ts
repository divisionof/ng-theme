import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';

@Component({
  selector: 'router-outlet',
  template: `
    <h2>Posts</h2>
    <ul *ngIf="posts">
      <li *ngFor="let post of posts">
        <h3>{{ post.title.rendered }}</h3>
      </li>
    </ul>
  `,
  providers: [PostsService]
})
export class PostsComponent implements OnInit {
  constructor(private _postsService: PostsService) { }

  ngOnInit() {
    this.listPosts();
  }

  listPosts() {
    this._postsService.getPosts()
        .subscribe(res => {
          this.posts = JSON.parse(res._body);
        },
        error => console.error('listPosts failed'));
  }
}
