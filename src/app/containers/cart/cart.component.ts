import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  dishes$ = this.cartService.dishes$;
  totalCost$ = this.cartService.totalCost$;

  constructor(private cartService: CartService) { }
}
