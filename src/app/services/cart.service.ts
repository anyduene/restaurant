import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, map } from 'rxjs';
import { dishes } from './dishes';
import { Dish } from '../models/dish';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private dishes = new BehaviorSubject(dishes);
  dishes$ = this.dishes.asObservable();

  private dishToAddByLink = new BehaviorSubject('');
  dishToAddByLink$ = this.dishToAddByLink.asObservable();


  addToCartDish$ = combineLatest([
    this.dishes$,
    this.dishToAddByLink$,
  ]).pipe(
    map(([dishes, link]) => {
      console.log(dishes.find(dish => dish.link.toLowerCase() === link.toLowerCase()));
      return dishes.find(dish => dish.link.toLowerCase() === link.toLowerCase());
    }),
  )

  dishToAddLink(dishLink: string) {
    this.dishToAddByLink.next(dishLink);
  }
}
