import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent } from './home.component';
import { PostsComponent } from './posts.component';
import { CustomPostsComponent } from './custom-posts.component';
import { SamplePageComponent } from './sample-page/sample-page.component';


const routes: RouterConfig = [
  {
    path: '',
    component: HomeComponent
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
