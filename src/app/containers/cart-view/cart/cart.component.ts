import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Dish } from 'src/app/models/dish';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  dishes$ = this.cartService.dishes$;
  totalCost$ = this.cartService.totalCost$;

  dishes: Dish[] = [];

  allDishesCount: number = 0;

  timeForm!: FormGroup;
  standart: number = 0;
  fast: number = 100;
  cookingTime: number = this.standart

  constructor(private cartService: CartService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.cartService.dishes$.subscribe(dishes => {
      const dishMap = new Map<string, Dish>();
      dishes.forEach((dish) => {
        if (dishMap.has(dish.name)) {
          const existingDish = dishMap.get(dish.name)!;
          existingDish.count++;
          this.allDishesCount++;
        } else {
          dishMap.set(dish.name, { ...dish, count: 1 });
          this.allDishesCount++;
        }
      });

      this.dishes = Array.from(dishMap.values());
    });

    this.timeForm = this.formBuilder.group({
      cookingTime: ['standart']
    });
  }

  countIncrease(dish: Dish) {
    dish.count++;
    this.allDishesCount++;
    return dish.count;
  }

  countDecrease(dish: Dish) {
    if (dish.count > 1) {
      dish.count--;
      this.allDishesCount--;
    }
    return dish.count;
  }
}
