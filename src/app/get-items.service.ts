import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetItemsService {

  constructor(private http:HttpClient) { 
    this.getData();
  }

  //reading the local json file
  getData():Observable<any>{
    return this.http.get("../assets/data/cartData.json");
  }


  //displaying items present in the cart
  items:any=[];
  noOfItems:number=0;
  flag:boolean=false;
  totalItems:number=0;
  totalPrice:number=Number(0);
  
  cartItem(id:number,name:string,price:number){
    //checking duplicates
    if(this.items.length!=0){
      for(let i=0;i<this.items.length;i++){
        if(this.items[i].id==id){
          this.noOfItems++;
          this.items[i].itemPrice+=Number(price);
          this.items[i].quantity=this.noOfItems;
          this.flag=true;
          break;
        }
        else{
          this.flag=false;
        }
      }
    }
      if(this.flag==false || this.items.length==0){
        this.noOfItems=1;
        this.items.push({
          "id":id,
          "name":name,
          "quantity":this.noOfItems,
          "price":Number(price),
          "itemPrice":Number(price)
        })
      }
      this.totalItems++;
      this.totalPrice+=Number(price);
  }

  //Increasing the quantity of a particular item 
  add(id:number,price:number){

    for(let i:number=0;i<this.items.length;i++){
      if(this.items[i].id==id){
        this.items[i].quantity++;
        this.items[i].itemPrice+=Number(price);
        this.totalItems++;
        this.totalPrice+=Number(price);
        break;
      }
    }
  }

  //decreasing the quantity of a particular item
  substract(id:number,price:number){
    for(let i:number=0;i<this.items.length;i++){
      if(this.items[i].id==id){
        if(this.items[i].quantity>0){
        this.items[i].quantity--;
        this.items[i].itemPrice-=Number(price);
        this.totalItems--;
        this.totalPrice-=Number(price);
        }
        
        break;
      }
    }
  }

  //deleting an intem from the cart
  deleteItem(id:number,price:number){
    for(let i:number=0;i<this.items.length;i++){
      if(this.items[i].id==id){
        this.totalPrice-=this.items[i].itemPrice;
        this.totalItems-=this.items[i].quantity;
        this.items.splice(i,1);
      }
    }
  }

  //delete all items in the cart
  deleteAllItems(){
    this.items.splice(0,this.items.length);
    this.totalItems=0;
    this.totalPrice=0;
  }

}