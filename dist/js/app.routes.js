"use strict";
const router_1 = require('@angular/router');
const home_component_1 = require('./home.component');
const posts_component_1 = require('./posts.component');
const custom_posts_component_1 = require('./custom-posts.component');
const sample_page_component_1 = require('./sample-page/sample-page.component');
const routes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'posts',
        component: posts_component_1.PostsComponent,
    },
    {
        path: 'custom-posts',
        component: custom_posts_component_1.CustomPostsComponent
    },
    {
        path: 'sample-page',
        component: sample_page_component_1.SamplePageComponent
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
