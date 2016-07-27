import { Component, OnInit } from '@angular/core';
import { SamplePageService } from './sample-page.service';

@Component({
  selector: 'sample-page',
  template: `
    <div *ngIf="page">
      <h2>{{ page.title.rendered }}</h2>
      <p [innerHTML]=page.content.rendered></p>
    </div>
  `,
  providers: [SamplePageService]
})
export class SamplePageComponent implements OnInit {
  constructor(private _samplePageService: SamplePageService) { }
  page: Object;

  ngOnInit() {
    this.showPage();
  }

  showPage() {
    this._samplePageService.getPage().subscribe(res => this.page = res.json());
  }
}
