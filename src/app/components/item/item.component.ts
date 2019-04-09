import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { desProdInterface } from 'src/app/interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styles: []
})
export class ItemComponent implements OnInit {

  product:desProdInterface; //solo lo inicializo pero ahora mismo es undefined para arreglar esto hay 2 opciones 1. en el html pogo un ngif.... y 2. lo inicializo la interfaz todas con ? interrogante
  id:string;
  constructor( public route:ActivatedRoute,
                public _serviProduct:ProductsService ) {
    this.route.params.subscribe(parametros =>{

     this._serviProduct.getProduct(parametros['id'])
                       .subscribe((producto:desProdInterface ) =>{
           this.id = parametros['id']; 
          this.product = producto;
                  
             //console.log(producto);
     })


    })
   }

  ngOnInit() {
  }

}
