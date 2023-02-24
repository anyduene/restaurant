import { Component } from '@angular/core';
import { Dish } from 'src/app/models/dish';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.scss']
})
export class CartViewComponent {
  cartItems$ = this.cartService.cartItems$;
  totalCount$ = this.cartService.totalCount$;
  totalCost$ = this.cartService.totalCost$;
  totalDiscount$ = this.cartService.totalDiscount$;

  constructor(public readonly cartService: CartService) {
  }

  increaseCount(link: string) {
    this.cartService.addDish(link);
  }

  decreaseCount(link: string) {
    this.cartService.deleteDish(link);
  }

  removeDish(link: string) {
    this.cartService.removeDish(link);
  }
}
