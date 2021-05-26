import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {

  data: any[];

  constructor() {
    this.data = [
      {
        name: 'primary',
        state: false
      },
      {
        name: 'secondary',
        state: true
      },
      {
        name: 'tertiary',
        state: false
      },
      {
        name: 'dark',
        state: true
      }
    ]
  }

  ngOnInit() {
  }

  showData(data:any) {
      console.log(data);
  }

  onClick(){
    console.log(this.data);
  }

}
