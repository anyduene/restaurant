import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { dishes } from './dishes';
import { Dish } from '../models/dish';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  getDishByName(name: string, categoryDishes: Dish[]): Observable<Dish | undefined> {
    const foundDish = of(categoryDishes.find(dish => dish.name.toLowerCase() === name.toLowerCase()))
    return foundDish;
  }

  getSaleDishes(categoryDishes: Dish[] = []): Observable<Dish[]> {
    const saleDishes = of(categoryDishes.filter(dish => dish.sale))
    return saleDishes;
  }
}
