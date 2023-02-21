import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Dish } from '../../models/dish';

@Component({
  selector: 'app-foodlist',
  templateUrl: './foodlist.component.html',
  styleUrls: ['./foodlist.component.scss']
})
export class FoodlistComponent {
  @Input() pageTitle = '';
  @Input() dishes: Dish[] = [];
  @Output() addToCart = new EventEmitter<Dish>();

  onAddToCart(dish: Dish) {
    this.addToCart.emit(dish);
  }
}