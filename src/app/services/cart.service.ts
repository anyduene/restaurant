import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartItem } from '../models/cart-item';
import { Dish } from '../models/dish';
import { MenuService } from './menu.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private dishCounts = new BehaviorSubject(new Map());

  cartItems$: Observable<CartItem[]> = combineLatest([
    this.menuService.dishes$,
    this.dishCounts,
  ]).pipe(
    map(([dishes, dishCounts]) => {
      return dishes
        .filter(dish => dishCounts.has(dish.link))
        .map(dish => {
          const count = dishCounts.get(dish.link);
          const discount = dish.sale ? 0.8 : 1;
          const totalCost = dish.price * discount * count;
          const dishPrice = dish.price * count;
          return { count, totalCost, dish, dishPrice };
        });
    })
  );

  totalCount$ = this.cartItems$.pipe(
    map(dishes => dishes.reduce((acc, dish) => acc + dish.count, 0))
  );

  totalCost$ = this.cartItems$.pipe(
    map(dishes => dishes.reduce((acc, dish) => acc + dish.totalCost, 0))
  );

  totalDiscount$ = this.cartItems$.pipe(
    map(dishes => dishes.reduce((acc, dish) => acc + dish.dishPrice, 0))
  );

  constructor(private menuService: MenuService) { }

  private getDishCounts() {
    return new Map(this.dishCounts.value);
  }

  addDish(link: string) {
    const dishCounts = this.getDishCounts();
    const count = dishCounts.get(link) || 0;

    if (count < 5) {
      dishCounts.set(link, count + 1);
      this.dishCounts.next(dishCounts);
    }
  }

  deleteDish(link: string) {
    const dishCounts = this.getDishCounts();
    const count = dishCounts.get(link);

    if (count > 1) {
      dishCounts.set(link, count - 1);
      this.dishCounts.next(dishCounts);
    }
  }

  removeDish(link: string) {
    const dishCounts = this.getDishCounts();
    dishCounts.delete(link);
    this.dishCounts.next(dishCounts);
  }
}
