import { Component } from '@angular/core';
import { PostsComponent } from './posts.component';

@Component({
  selector: 'my-app',
  template:`
    <h1>My First Angular 2 App</h1>
    <router-outlet></router-outlet>
  `,
  directives: [PostsComponent]
})
export class AppComponent { }
