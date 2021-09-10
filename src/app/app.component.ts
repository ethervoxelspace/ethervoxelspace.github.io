import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() {}

  noMetaMask = false;

  ngOnInit() {
    if (typeof ethereum === 'undefined') {
      this.noMetaMask = true;
    }
  }
}
