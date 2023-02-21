import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Dish } from 'src/app/models/dish';

@Component({
  selector: 'app-foodblock',
  templateUrl: './foodblock.component.html',
  styleUrls: ['./foodblock.component.scss']
})
export class FoodblockComponent {
  @Input() dish!: Dish;
  @Input() foundDish?: Dish;
  @Output() dishToAddLink = new EventEmitter<string>();

  addToCartClick() {
    this.dishToAddLink.emit(this.dish.link);
  }
}
