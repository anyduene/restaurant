import { Injectable } from '@angular/core';

import { Category } from './category';
import { CATEGORIES } from './categories';

import { Dish } from './dish';
import { mostPopularDishes } from './mostpop';
import { pizzalist } from './pizzalist';
import { sushilist } from './sushilist'

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
  getPizzalist(): Dish[] {
    return pizzalist;
  }
  getSushilist(): Dish[] {
    return sushilist;
  }
  

  constructor() { }
}
