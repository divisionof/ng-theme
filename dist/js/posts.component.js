"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const posts_service_1 = require('./posts.service');
let PostsComponent = class PostsComponent {
    constructor(_postsService) {
        this._postsService = _postsService;
    }
    ngOnInit() {
        this.listPosts();
    }
    listPosts() {
        this._postsService.getPosts()
            .subscribe(res => {
            this.posts = res.json();
            this.currentPost = res.json()[0];
        });
    }
    showPost(post) {
        if (this.currentPost === post)
            return;
        this.currentPost = post;
    }
};
PostsComponent = __decorate([
    core_1.Component({
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
        providers: [posts_service_1.PostsService]
    }), 
    __metadata('design:paramtypes', [posts_service_1.PostsService])
], PostsComponent);
exports.PostsComponent = PostsComponent;
