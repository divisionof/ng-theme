import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SinglePageService } from './single-page.service';

@Component({
  selector: 'single-page',
  templateUrl: './single-page.component.html',
  providers: [SinglePageService]
})
export class SinglePageComponent implements OnInit {
  constructor(private _singlePageService: SinglePageService, private router: Router) { }

  private page: Object;
  private route: string;

  ngOnInit() {
    this.route = this.router.url.substring(1); // trim leading slash
    this.showPage();
  }

  showPage() {
    this._singlePageService.getPage(this.route).subscribe(res => this.page = res.json()[0]);
  }
}
