import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {

  porcentaje: number;

  constructor() {
    this.porcentaje = 0;
  }

  ngOnInit() {
  }

  rangeChange(event) {
    this.porcentaje = event.detail.value/100;
  }

}
