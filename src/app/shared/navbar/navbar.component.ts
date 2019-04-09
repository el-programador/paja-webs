import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';
import { InfoPageInterface } from 'src/app/interfaces/info-pages.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {




  constructor( public  _service : InfoPaginaService) {
   //ya todas la propiedades lo tiene el servicio  _service
    
   }

  ngOnInit() {
  }

}
