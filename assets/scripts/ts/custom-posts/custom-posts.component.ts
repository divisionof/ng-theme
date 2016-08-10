import { Component, OnInit } from '@angular/core';
import { CustomPostsService } from './custom-posts.service';

@Component({
  selector: 'custom-posts',
  templateUrl: './custom-posts.component.html',
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
