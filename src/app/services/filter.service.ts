import { Injectable } from '@angular/core';
import { dishes } from './dishes';
import { Dish } from '../models/dish';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  foundDish?: Dish;

  getDishByName(name: string, categoryDishes: Dish[] = []) {
    return this.foundDish = categoryDishes.find(dish => dish.name.toLowerCase() === name.toLowerCase());
  }

  getSaleDishes(categoryDishes: Dish[] = []) {
      return categoryDishes.filter(dish => dish.sale);
  }
}
