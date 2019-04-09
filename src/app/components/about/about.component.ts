import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {

  teams:any[] = [];

  constructor( public _service: InfoPaginaService ) {
   
    this.teams = this._service.equipo

   }
  
  ngOnInit() {
  }

}
