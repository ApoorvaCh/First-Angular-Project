import { Component, OnInit } from '@angular/core';
import { GetItemsService } from '../get-items.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {

  constructor(private myitems:GetItemsService) { }

  items:any=[];
  totalItems:number=0;
  totalPrice:number=0;
  ngOnInit() {
    this.items=this.myitems.items;
    this.totalItems=this.myitems.totalItems;
    this.totalPrice=this.myitems.totalPrice;
  }

  add(id:number,price:number){
    this.myitems.add(id,price);
    this.totalItems=this.myitems.totalItems;
    this.totalPrice=this.myitems.totalPrice;
  }
  
  substract(id:number,price:number){
    this.myitems.substract(id,price);
    this.totalItems=this.myitems.totalItems;
    this.totalPrice=this.myitems.totalPrice;
   
  }

  deleteItem(id:number,price:number){
    this.myitems.deleteItem(id,price);
    this.totalItems=this.myitems.totalItems;
    this.totalPrice=this.myitems.totalPrice;
  }
  
  deleteAll(){
    this.myitems.deleteAllItems();
    this.totalPrice=this.myitems.totalPrice;
    this.totalItems=this.myitems.totalItems;
  }
}
