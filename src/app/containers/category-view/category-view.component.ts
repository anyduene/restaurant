import { Component } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.scss']
})
export class CategoryViewComponent {
  category$ = this.menuService.selectedCategory$;
  dishes$ = this.menuService.filteredDishes$;
  searchName$ = this.menuService.searchName$;
  onlySale$ = this.menuService.onlySale$;

  constructor(
    private route: ActivatedRoute,
    private menuService: MenuService,
  ) { }

  ngOnInit() {
    const categoryName = this.route.snapshot.params['category'];
    this.menuService.selectCategoryByName(categoryName);
  }

  onSearch(value: string) {
    this.menuService.setSearchName(value);
  }

  onToggleSale(checked: boolean) {
    this.menuService.setOnlySale(checked);
  }

  addToCart(nameToAdd: string) {
    this.menuService.setSearchName(nameToAdd);
    this.menuService.addToCart()
  }
}
