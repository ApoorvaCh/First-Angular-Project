import { Component, OnInit } from '@angular/core';
import { GetItemsService } from '../get-items.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private getItems:GetItemsService) { }

  ngOnInit() {
    this.getItems.getData().subscribe(data=>this.myCart(data));
  }
  cartData:any;
  searchItem;
  myCart(data:any){
    this.cartData=data;
  }
  numberOfItems:number=this.getItems.totalItems;
  totalPrice:number=this.getItems.totalPrice;
  
  items:any;
  addToCart(id:number,name:string,price:number){
    // this.numberOfItems++;
    // this.totalPrice+=Number(price);
    this.items={
      "id":id,
      "name":name,
      "price":price
    }
    this.getItems.cartItem(this.items.id,this.items.name,this.items.price);
    this.numberOfItems=this.getItems.totalItems;
    this.totalPrice=this.getItems.totalPrice;
  }


}
