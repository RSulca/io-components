import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { Data } from '../../interfaces/interface';
import { Observable } from 'rxjs';

export interface DataFake {
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  avatar: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  obsData: Observable<Data[]>;

  constructor(private menuController: MenuController, private _data: DataService) {
    this.obsData = this._data.getDataOpciones();
    // constructor(private _data: DataService) {
    //   this.data = data;
    // this._data.getData().subscribe(data => {
    // });
  }

  ngOnInit() {
  }

  onClick() {
    this.menuController.open('first');
    console.log('Holaaa');
  }

}
