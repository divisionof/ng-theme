import { provideRouter, RouterConfig } from '@angular/router';
import { FrontPageComponent } from '../front-page/front-page.component';
import { PostsComponent } from '../blog/posts.component';
import { CustomPostsComponent } from '../custom-posts/custom-posts.component';
import { SinglePageComponent } from '../single-page/single-page.component';
import { ExampleComponent } from '../example/example.component';

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
    path: 'example',
    component: ExampleComponent
  },
  {
    // TODO: figure out how to handle pages vs posts
    // maybe use an array of page slugs instead of a wildcard
    path: '**',
    component: SinglePageComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
