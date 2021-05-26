import { Component, OnInit } from '@angular/core';
import { DataFake } from '../home/home.page';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  data: DataFake[];

  constructor(private _data: DataService) {
    this._data.getData().subscribe(data => {
      this.data = data;
    })
  }

  ngOnInit() {
  }

}
