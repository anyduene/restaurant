import { Component } from '@angular/core';
import { Category } from '../../models/category';
import { Dish } from 'src/app/models/dish';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  categories: Category[] = [];
  mostPopular: Dish[] = [];

  constructor(private menuService: MenuService) {}

  getCategories(): void {
    this.categories = this.menuService.getCategories();
  }
  
  getMostpop(): void {
    this.mostPopular = this.menuService.getMostPopularDishes();
  }

  ngOnInit(): void {
    this.getCategories();
    this.getMostpop();
  }
}