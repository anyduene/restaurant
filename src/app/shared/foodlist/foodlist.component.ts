import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Dish } from '../../models/dish';

@Component({
  selector: 'app-foodlist',
  templateUrl: './foodlist.component.html',
  styleUrls: ['./foodlist.component.scss']
})
export class FoodlistComponent {
  addToCartStatus!: string;
  @Input() pageTitle = '';
  @Input() dishes: Dish[] = [];
  @Output() addToCartNumber = new EventEmitter<string>();

  addToCart(addToCart: string) {
    this.addToCartStatus = addToCart;
    this.addToCartNumber.emit(this.addToCartStatus);
  }
}