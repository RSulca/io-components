import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(albumes: any[], palabra: string, filtro: string): any {
    if (filtro === 'publisher' && palabra === 'Todos') {
      return albumes;
    }
    let albumAux = [];
    albumAux = albumes.filter((alb: any) => alb[filtro].toLocaleLowerCase().includes(palabra.toLocaleLowerCase()))
    console.log(albumAux);
    return albumAux;
  }

}
