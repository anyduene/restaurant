import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { CartService } from 'src/app/services/cart.service';
import { Dish } from 'src/app/models/dish';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  categories$ = this.menuService.categories$;
  mostPopular$ = this.menuService.mostPopularDishes$;

  constructor(
    private menuService: MenuService,
    private cartService: CartService) { }

  ngOnInit() {
    this.menuService.reset();
  }

  onAddToCart(dish: Dish) {
    this.cartService.addDish(dish);
  }
}