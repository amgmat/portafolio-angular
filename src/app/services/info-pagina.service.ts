import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  equipo: any[] = [];

  constructor(private http: HttpClient) {
    //console.log('Info página cardado');
    //Lerr el archivo JSON
    this.cargarInfo();
    this.cargarEquipo();
        //console.log( resp['email']);

      
   }

   private cargarInfo(){
     this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: InfoPagina) => {

        this.cargada = true;
        this.info = resp;
        //console.log(resp);

      });
   }

   private cargarEquipo(){

    this.http.get('https://angular-html-f930a.firebaseio.com/equipo.json')
      .subscribe( (resp: any[]) => {

      this.equipo = resp;
      //console.log(resp);

    });
   }

}
