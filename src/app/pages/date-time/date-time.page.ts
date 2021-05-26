import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  date: Date;
  customPickerOptions: any;
  customYearValues = [2077, 2020, 2016, 2008, 2004, 2000, 1996];
  customeDate: any;

  constructor() {
    this.date = new Date();
    console.log(this.date);
    this.customPickerOptions = {
      buttons: [{
        text: 'Cancelar',
        handler: () => {
          console.log('Sale');
        }
      }, {
        text: 'Elegir',
        handler: (event: any) => {
          console.log(event);
          this.customeDate = event;
        }
      }],
      backdropDismiss: false
    }
  }

  ngOnInit() {
  }

  listenChange(date: any) {
    console.log(date);
    console.log(new Date(date.detail.value));
  }

}
