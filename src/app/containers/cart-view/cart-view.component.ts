import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  orderCreationInProgress$ = this.cartService.orderCreationInProgress$;

  constructor(
    private readonly cartService: CartService,
    private readonly snackBar: MatSnackBar,
  ) {}

  increaseCount(link: string) {
    this.cartService.addDish(link);
  }

  decreaseCount(link: string) {
    this.cartService.deleteDish(link);
  }

  removeDish(link: string) {
    this.cartService.removeDish(link);
  }

  createOrder() {
    this.cartService.createOrder();
  }

  onPromoNotFound() {
    this.snackBar.open('Invalid Promo code :(', undefined, {
      duration: 1500,
      panelClass: ['red-snackbar']
    });
  }

  onPromoFound() {
    this.snackBar.open('Promo code applied', undefined, {
      duration: 1500,
      panelClass: ['green-snackbar']
    });
  }
}
