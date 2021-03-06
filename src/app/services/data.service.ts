import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { delay, map } from 'rxjs/operators';
import { Data } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  URL: string;

  constructor(private http: HttpClient) {
    this.URL = 'https://reqres.in/api';
  }

  getData() {
    return this.http.get(`${this.URL}/users?page=1&per_page=10`).pipe(
      map(res => {
        return res['data'];
      }),
      delay(1000)
    )
  }

  getAlbumes() {
    return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/albums`)
  }

  getDataOpciones() {
    return this.http.get<Data[]>('../assets/data/opciones.json');
  }

  getSuperheroes() {
    return this.http.get<any[]>('../assets/data/superheroes.json').pipe(
      delay(1500)
    );
  }

}
