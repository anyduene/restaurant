import { Component } from '@angular/core';
import { Dish } from '../../dish';
import { mostPopularDishes } from '../../mostpop';

@Component({
  selector: 'app-foodlist',
  templateUrl: './foodlist.component.html',
  styleUrls: ['./foodlist.component.scss']
})
export class FoodlistComponent {
  mostpop = mostPopularDishes;
}