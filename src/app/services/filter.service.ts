import { Injectable } from '@angular/core';
import { dishes } from './dishes';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private dishes = dishes;

  getDishByName(name: string){
    return this.dishes.find(dish => dish.name.toLowerCase() === name.toLowerCase());
  }

  constructor() { }
}
