import { Component } from '@angular/core';
import { MenuService } from 'src/app/menu.service';
import { Dish } from 'src/app/dish';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.scss']
})
export class CategoryViewComponent {
  pizzalist: Dish[] = [];
  sushilist: Dish[] = [];

  constructor(private menuService: MenuService) {}

  getPizzalist(): void {
    this.pizzalist = this.menuService.getPizzalist();
  }
  getSushilist(): void {
    this.sushilist = this.menuService.getSushilist();
  }

  ngOnInit(): void {
    this.getPizzalist();
    this.getSushilist();
  }
}
