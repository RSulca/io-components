import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  dataAlbum: any[];
  palabra: string;

  constructor(private _data: DataService) {
    this.dataAlbum = [];
    this.palabra = "";
  }

  ngOnInit() {
    this._data.getAlbumes().subscribe(albumes => {
      this.dataAlbum = albumes;
      console.log(this.dataAlbum);
    })
  }

  onChange(event: any) {
    this.palabra = event.detail.value;
  }

}
