import { Component } from '@angular/core';
import { Category } from '../../category';
import { MenuService } from '../../menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  categories: Category[] = [];

  constructor(private menuService: MenuService) {}

  getCategories(): void {
    this.categories = this.menuService.getCategories();
  }

  ngOnInit(): void {
    this.getCategories();
  }
}