import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  data: any[];

  constructor() {
    this.data = Array(20);
  }

  ngOnInit() {
  }

  loadData(event) {
    setTimeout(() => {
      if (this.data.length > 50){
        this.infiniteScroll.complete();
        this.infiniteScroll.disabled = true;
        return;
      }
      let dataAux = Array(20);
      this.data.push(...dataAux);
      this.infiniteScroll.complete();
    }, 2000);
  }

}
