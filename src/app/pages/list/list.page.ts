import { Component, OnInit, ViewChild } from '@angular/core';
import { DataFake } from '../home/home.page';
import { DataService } from '../../services/data.service';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  data: DataFake[];
  @ViewChild(IonList) ionList: IonList;

  constructor(private _data: DataService) {
    this._data.getData().subscribe(data => {
      this.data = data;
    })
  }

  ngOnInit() {
  }

  favorite(item: any) {
    console.log(item);
    this.ionList.closeSlidingItems();
  }

  favorite2(item: any) {
    console.log(item);
    this.ionList.closeSlidingItems();
  }

  share(item: any) {
    console.log(item);
    this.ionList.closeSlidingItems();
  }

  share2(item: any) {
    console.log(item);
    this.ionList.closeSlidingItems();
  }
}
