import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

// export interface Data {
//   id: number,
//   email: string,
//   first_name: string,
//   last_name: string,
//   avatar: string
// }

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
    this.data = [{
      icon: 'alert-circle-outline',
      name: 'Alert',
      redirecTo: '/alert'
    }, {
      icon: 'albums-outline',
      name: 'Action Sheet',
      redirecTo: '/action-sheet'
    }]
    // constructor(private _data: DataService) {
    //   this.data = data;
    // this._data.getData().subscribe(data => {
    // });
  }

  ngOnInit() {
  }

}
