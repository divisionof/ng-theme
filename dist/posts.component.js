System.register(['@angular/core', './posts.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, posts_service_1;
    var PostsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (posts_service_1_1) {
                posts_service_1 = posts_service_1_1;
            }],
        execute: function() {
            PostsComponent = (function () {
                function PostsComponent(_postsService) {
                    this._postsService = _postsService;
                }
                PostsComponent.prototype.ngOnInit = function () {
                    this.listPosts();
                };
                PostsComponent.prototype.listPosts = function () {
                    var _this = this;
                    this._postsService.getPosts()
                        .subscribe(function (res) {
                        _this.posts = JSON.parse(res._body);
                    }, function (error) { return console.error('listPosts failed'); });
                };
                PostsComponent = __decorate([
                    core_1.Component({
                        selector: 'router-outlet',
                        template: "\n    <h2>Posts</h2>\n    <ul *ngIf=\"posts\">\n      <li *ngFor=\"let post of posts\">\n        <h3>{{ post.title.rendered }}</h3>\n      </li>\n    </ul>\n  ",
                        providers: [posts_service_1.PostsService]
                    }), 
                    __metadata('design:paramtypes', [posts_service_1.PostsService])
                ], PostsComponent);
                return PostsComponent;
            }());
            exports_1("PostsComponent", PostsComponent);
        }
    }
});
