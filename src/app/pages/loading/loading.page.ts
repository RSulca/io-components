import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { DataFake } from '../home/home.page';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  data: DataFake[];
  loading: HTMLIonLoadingElement;

  constructor(public loadingController: LoadingController, public _data: DataService) {
    this.presentLoading();
    this.data = [];
  }

  ngOnInit() {
    this._data.getData().subscribe(data => {
      this.data = data;
      this.loading.dismiss();
    })
  }

  async presentLoading() { //Recomendable usar en servicio
    this.loading = await this.loadingController.create({
      message: 'Please wait...',
    });
    await this.loading.present();
  }


}
