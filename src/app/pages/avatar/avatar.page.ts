import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { DataFake } from '../home/home.page';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
})
export class AvatarPage implements OnInit {

  data: DataFake[]

  constructor(private _data: DataService) {
    this._data.getData().subscribe(data => {
      this.data = data;
    })
  }

  ngOnInit() {
  }

}
