import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

export interface DataFake {
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  avatar: string
}

interface Data {
  icon: string,
  name: string,
  redirecTo: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  data: Data[];

  constructor() {
    this.data = [
      {
        icon: 'albums-outline',
        name: 'action-sheet',
        redirecTo: '/action-sheet'
      },
      {
        icon: 'alert-circle-outline',
        name: 'alert',
        redirecTo: '/alert'
      },
      {
        icon: 'person-circle-outline',
        name: 'avatar',
        redirecTo: '/avatar'
      },
      {
        icon: 'add-circle-outline',
        name: 'button',
        redirecTo: '/button'
      },
      {
        icon: 'card-outline',
        name: 'card',
        redirecTo: '/card'
      },
      {
        icon: 'checkbox-outline',
        name: 'checkbox',
        redirecTo: '/checkbox'
      },
      {
        icon: 'calendar-outline',
        name: 'date-time',
        redirecTo: '/date-time'
      },
      {
        icon: 'chevron-forward-circle-outline',
        name: 'fab',
        redirecTo: '/fab'
      },
      {
        icon: 'grid-outline',
        name: 'grid',
        redirecTo: '/grid'
      },
      {
        icon: 'infinite-outline',
        name: 'infinite-scroll',
        redirecTo: '/infinite'
      },
      {
        icon: 'tablet-landscape-outline',
        name: 'input',
        redirecTo: '/input'
      },
      {
        icon: 'list-outline',
        name: 'list-sliding',
        redirecTo: '/list'
      },
      {
        icon: 'reorder-three-outline',
        name: 'list-reorder',
        redirecTo: '/list-reorder'
      },
      {
        icon: 'refresh-circle-outline',
        name: 'loading',
        redirecTo: '/loading'
      },
    ]
    // constructor(private _data: DataService) {
    //   this.data = data;
    // this._data.getData().subscribe(data => {
    // });
  }

  ngOnInit() {
  }

}
