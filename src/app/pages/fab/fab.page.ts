import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.page.html',
  styleUrls: ['./fab.page.scss'],
})
export class FabPage implements OnInit {

  data: any[];

  constructor() {
    this.data = Array(100);
  }

  ngOnInit() {
  }

}
