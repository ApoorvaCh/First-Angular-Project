import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CartItemsComponent } from './cart-items/cart-items.component';


const routes: Routes = [
  {
    path:'', component:ShoppingCartComponent
  },
  {
    path:'myCartItems', component:CartItemsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
