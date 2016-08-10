import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { HeaderComponent } from '../header/header.component';
import { FrontPageComponent } from '../front-page/front-page.component';
import { PostsComponent } from '../blog/posts.component';
import { CustomPostsComponent } from '../custom-posts/custom-posts.component';
import { SamplePageComponent } from '../sample-page/sample-page.component';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  directives: [HeaderComponent, ROUTER_DIRECTIVES],
  precompile: [FrontPageComponent, PostsComponent, CustomPostsComponent, SamplePageComponent]
})
export class AppComponent { }
