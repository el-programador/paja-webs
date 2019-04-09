import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPageInterface } from '../interfaces/info-pages.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info:InfoPageInterface = {};
  dataCargada = false;
  equipo:any[] = [];

  constructor( private _http: HttpClient) {
    //necesto importar la informacion desde el json => necesito http para hacer peticiones   
    this.cargarInfo();
    this.cargarEquipo();
   }


   private cargarInfo(){
    this._http.get('assets/data/data-pagina.json').subscribe( (res: InfoPageInterface) => {     
      this.info = res;
      this.dataCargada = true;
     // console.log(res);
    
        });
   }

   private cargarEquipo(){

  return  this._http.get('https://paja-web-s.firebaseio.com/equipo.json').subscribe((res:any[])=>{
    this.equipo = res;
    console.log(this.equipo);
    })

   }


}
