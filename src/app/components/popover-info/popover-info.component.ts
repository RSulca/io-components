import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],
})
export class PopoverInfoComponent implements OnInit {

  data:any;

  constructor(private popover:PopoverController) {
    this.data = Array(22);
  }

  onClick(id:number){
    this.popover.dismiss({
      data: id
    })
  }

  ngOnInit() {}

}
