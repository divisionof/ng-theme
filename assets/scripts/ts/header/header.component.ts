import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  directives: [MenuComponent]
})
export class HeaderComponent { }
