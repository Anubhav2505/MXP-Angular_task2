import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products:any=[];
  searchBrand:string ='';
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts():void{
    this.productService.getProducts().subscribe(
      (res=>{
        this.products=res;
        console.log(this.products);
        
      })
    )
  }

}
