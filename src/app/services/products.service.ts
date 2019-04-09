import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { prodInterface } from '../interfaces/prod.interface';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

 // private firebase :any = 'https://paja-web-s.firebaseio.com';

  productos:prodInterface[] = [];
  cargando:boolean= true;
  producFiltrado:prodInterface[] = [];

  constructor( private _http:HttpClient) {
    
    this.cargarProductos();
    
   }

   
   private cargarProductos(){

    return new Promise( (resolve, reject)=>{

      this._http.get('https://paja-web-s.firebaseio.com/productos_idx.json')
                .subscribe( (res:prodInterface[]) =>{
      
     this.productos = res;
     this.cargando = false;
     resolve();
     //console.log(this.productos);
    
     })

    });

     
   
}

  getProduct( id:string ){
    return  this._http.get(`https://paja-web-s.firebaseio.com/productos/${ id }.json`)

  }


  searchProduct(texto){

    if (this.productos.length === 0) {
      //entonces cargamos productos
      this.cargarProductos().then(()=>{
      //despues de cargar el producto
      this.filtrarProducto(texto);
      });
    }else{
      //si ya tengo datos lo vuelvo a llamar
      this.filtrarProducto(texto);
    }
    
  }


  private filtrarProducto(texto:string){

    this.producFiltrado = [];
    //console.log(this.productos);
    texto = texto.toLocaleLowerCase();

    
    this.productos.forEach( prod =>{

      const tituloLower = prod.titulo.toLocaleLowerCase();

      if (prod.categoria.indexOf(texto) >= 0 ||  tituloLower.indexOf(texto) >= 0 ) {
        this.producFiltrado.push( prod);
        
      }

    })
    //console.log(this.productos);

  }

}