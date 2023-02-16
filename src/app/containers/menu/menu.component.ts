import { Component } from '@angular/core';
import { Category } from '../../category';
import { Dish } from 'src/app/dish';
import { MenuService } from '../../menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  categories: Category[] = [];
  mostpop: Dish[] = [];

  constructor(private menuService: MenuService) {}

  getCategories(): void {
    this.categories = this.menuService.getCategories();
  }
  getMostpop(): void {
    this.mostpop = this.menuService.getMostpop();
  }


  ngOnInit(): void {
    this.getCategories();
    this.getMostpop();
  }
}