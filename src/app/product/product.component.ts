import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';
import {ProductService} from '../services/product.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService,private activatedRoute:ActivatedRoute) {

  }

  title = "Ürün Listesi"
  //filterText="abc"  burada filtertextin ilk değerini veriyoruz ama inputtan yani two way binding ile arama yapcağımız için bunu silmemiz gerkeiyor.
  filterText = ""
  products: Product[];

  
  /*   {
       id: 1, name: "Samsung", price: 5000, categoryId: 2, description: "Samsung Laptop", imageUrl: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1104&q=80"
     },
     {
       id: 2, name: "Apple", price: 1000, categoryId: 2, description: "Apple MacBook", imageUrl: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1104&q=80"
     },
     {
       id: 3, name: "LG", price: 3000, categoryId: 1, description: "LG Laptop", imageUrl: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1104&q=80"
     }, {
       id: 4, name: "Philips", price: 4000, categoryId: 1, description: "Philips Laptop", imageUrl: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1104&q=80"
     }
   ]
   */

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.productService.getProduct(params["categoryId"]).subscribe(data=>{
        this.products=data
      });
    })
    
  }
  addToCard(product) {

    alert(product.name + " sepete eklendi.")
    //this.alertifyService.success("Sepete eklendi: " +  product.name)
  }
  

}
