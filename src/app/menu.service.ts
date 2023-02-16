import { Injectable } from '@angular/core';
import { Category } from './category';
import { CATEGORIES } from './categories';

import { Dish } from './dish';
import { mostPopularDishes } from './mostpop';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  getCategories(): Category[] {
    return CATEGORIES;
  }

  getMostpop(): Dish[] {
    return mostPopularDishes;
  }

  constructor() { }
}
