import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  heros: string[];
  toggle: boolean;

  constructor() {
    this.heros = ['IronMan', 'Captain America', 'Thor', 'Hulk'];
    this.toggle = false;
  }

  ngOnInit() {
  }

  doReorder(event: any) {
    let hero = this.heros[event.detail.from];
    this.heros.splice(event.detail.from, 1);
    this.heros.splice(event.detail.to, 0, hero);
    event.detail.complete();
    console.log(this.heros);
  }

}
