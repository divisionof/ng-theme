import { provideRouter, RouterConfig } from '@angular/router';

import { FrontPageComponent } from '../front-page/front-page.component';
import { PostsComponent } from '../blog/posts.component';
import { CustomPostsComponent } from '../custom-posts/custom-posts.component';
import { SamplePageComponent } from '../sample-page/sample-page.component';


const routes: RouterConfig = [
  {
    path: '',
    component: FrontPageComponent
  },
  {
    path: 'posts',
    component: PostsComponent,
  },
  {
    path: 'custom-posts',
    component: CustomPostsComponent
  },
  {
    path: 'sample-page',
    component: SamplePageComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
