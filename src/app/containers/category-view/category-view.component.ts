import { Component } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { Dish } from 'src/app/models/dish';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.scss']
})
export class CategoryViewComponent {
  dishes: Dish[] = [];
  category: Category | undefined;

  constructor(
    private route: ActivatedRoute,
    private menuService: MenuService,
  ) {}

  ngOnInit() {
    const categoryName = this.route.snapshot.params['category'];
    this.category = this.menuService.getCategoryByName(categoryName);
    
    if (this.category) {
      this.dishes = this.menuService.getDishesByCategory(this.category.id);
    }
  }
}
