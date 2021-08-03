import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {

  data: any;

  constructor() {
    this.data = [];
  }

  ngOnInit() {
  }

  doRefresh(event){
    setTimeout(() => {
      this.data = Array(30);
      event.target.complete();
    }, 2000);
  }

}
