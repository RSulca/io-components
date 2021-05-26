import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
})
export class ButtonPage implements OnInit {

  flag: boolean;

  constructor() {
    this.flag = false;
  }

  ngOnInit() {
  }

}
