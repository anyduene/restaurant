import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, map } from 'rxjs';

import { Dish } from '../models/dish';
import { MenuService } from './menu.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private dishes = new BehaviorSubject<Dish[]>([]);
  dishes$ = this.dishes.asObservable();

  addDish(dish: Dish) {
    const dishes = this.dishes.value;
    this.dishes.next(dishes.concat(dish));
  }
}
