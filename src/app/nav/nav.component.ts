import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { HomepageComponent } from '../homepage/homepage.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css','/../../css/default.css','/../../css/layout.css','/../../css/media-queries.css','/../../css/magnific-popup.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
