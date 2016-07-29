import { Component } from '@angular/core';
import { MenuComponent } from './menu.component';

@Component({
  selector: 'header',
  template: `
    <h1>Site Title</h1>
    <menu></menu>
  `,
  directives: [MenuComponent]
})
export class HeaderComponent { }
