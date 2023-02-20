import { Component, Input } from '@angular/core';
import { Dish } from '../../models/dish';

@Component({
  selector: 'app-foodlist',
  templateUrl: './foodlist.component.html',
  styleUrls: ['./foodlist.component.scss']
})
export class FoodlistComponent {
  @Input() pageTitle = '';
  @Input() dishesByCategory: Dish[] = [];
  @Input() foundDish?: Dish;
  @Input() saleDishes!: Dish[];
}