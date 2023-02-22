import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Dish } from '../models/dish';
import { MenuService } from './menu.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private dishes = new BehaviorSubject<Dish[]>([]);
  dishes$ = this.dishes.asObservable();

  totalCost$ = this.dishes$.pipe(
    map(dishes => dishes.reduce((acc, dish) => acc + dish.price, 0))
  );

  constructor(private menuService: MenuService) {
  }

  addDish(dish: Dish) {
    const dishes = this.dishes.value;
    this.dishes.next(dishes.concat(dish));
  }
}