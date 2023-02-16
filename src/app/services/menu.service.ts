import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { CATEGORIES } from './categories';
import { Dish } from '../models/dish';
import { dishes } from './dishes';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private dishes = dishes;
  private categories = CATEGORIES;

  getCategories(): Category[] {
    return this.categories;
  }

  getCategoryByName(name: string) {
    return this.categories.find(category => category.name.toLowerCase() === name.toLowerCase());
  }

  getMostPopularDishes(): Dish[] {
    return this.dishes.filter(dish => dish.mostPopular);
  }

  getDishesByCategory(id: number) {
    return this.dishes.filter(dish => dish.categoryId === id);
  }
}
