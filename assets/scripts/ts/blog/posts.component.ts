import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
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
