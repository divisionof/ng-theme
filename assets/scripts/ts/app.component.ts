import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { HeaderComponent } from './header.component';
import { HomeComponent } from './home.component';
import { PostsComponent } from './posts.component';
import { CustomPostsComponent } from './custom-posts.component';
import { SamplePageComponent } from './sample-page.component';


@Component({
  selector: 'my-app',
  template:`
    <header></header>
    <router-outlet></router-outlet>
  `,
  directives: [HeaderComponent, ROUTER_DIRECTIVES],
  precompile: [HomeComponent, PostsComponent, CustomPostsComponent, SamplePageComponent]
})
export class AppComponent { }
