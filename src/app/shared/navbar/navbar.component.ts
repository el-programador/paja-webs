import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

import {  Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {




  constructor( public  _service : InfoPaginaService,
                private router: Router) {
   //ya todas la propiedades lo tiene el servicio  _service
    
   }

   searchProduct(texto:string){

    if (texto.length < 1) {
      return;
    }

    this.router.navigate(['/search', texto ]);
    //console.log(texto);
   }

  ngOnInit() {
  }

}
