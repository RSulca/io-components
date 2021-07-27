import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { Observable } from 'rxjs';
import { Data } from './interfaces/interface';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  obsData: Observable<Data[]>;

  constructor(private _data: DataService) {
    this.obsData = this._data.getDataOpciones();
  }
}
