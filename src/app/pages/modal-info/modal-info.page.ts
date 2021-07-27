import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  @Input() user:String;
  @Input() category:String;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  cerrarSinArgumentos(){
    this.modalController.dismiss();
  }

  cerrarConArgumentos(){
    this.modalController.dismiss({
      tarea: 'Acabada',
      pendientes: 1
    });
  }

}
