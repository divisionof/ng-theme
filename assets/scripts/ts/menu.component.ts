import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'menu',
  template: `
    <ul>
      <a [routerLink]="['']">Home</a>
      <a [routerLink]="['/posts']">Posts</a>
      <a [routerLink]="['/custom-posts']">Custom Posts</a>
      <a [routerLink]="['/sample-page']">Sample Page</a>
    </ul>
  `,
  directives: [ROUTER_DIRECTIVES]
})
export class MenuComponent { }
