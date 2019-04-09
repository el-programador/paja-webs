import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  constructor( private route:ActivatedRoute,
              public _serviProduct: ProductsService ) {


   }

  ngOnInit() {

    this.route.params.subscribe(params =>{

      this._serviProduct.searchProduct(params['texto']);

     // console.log(params['texto']);
    })
  }

}
