import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  dataHero: any[];
  casa: string;

  constructor(private _data: DataService) {
    this.dataHero = [];
    this.casa = '';
  }

  ngOnInit() {
    this._data.getSuperheroes().subscribe(heros => {
      this.dataHero = heros;
    })
  }

  onChange(event) {
    this.casa = event.detail.value;
  }

}
