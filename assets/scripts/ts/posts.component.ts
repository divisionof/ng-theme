import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';

@Component({
  selector: 'posts',
  template: `
    <h2>Posts</h2>
    <ul *ngIf="posts">
      <li *ngFor="let post of posts">
        <h1 (click)="showPost(post)">{{ post.title.rendered }}</h1>
      </li>
    </ul>
    <div *ngIf="currentPost">
      <p [innerHTML]=currentPost.content.rendered></p>
    </div>
  `,
  providers: [PostsService]
})
export class PostsComponent implements OnInit {
  posts: Array<string>;
  public currentPost;
  constructor(private _postsService: PostsService) { }

  ngOnInit() {
    this.listPosts();
  }

  listPosts() {
    this._postsService.getPosts()
        .subscribe(res => {
          this.posts = res.json()
          this.currentPost = res.json()[0]
        });
  }

  showPost(post) {
    if (this.currentPost === post) return;
    this.currentPost = post;
  }
}
