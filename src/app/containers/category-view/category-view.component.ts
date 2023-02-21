import { Component } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { CartService } from 'src/app/services/cart.service';
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
  dishToAddByLink$ = this.cartService.dishToAddByLink$;

  constructor(
    private route: ActivatedRoute,
    private menuService: MenuService,
    private cartService: CartService,
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

  addToCart(dishToAddLink: string) {
    this.cartService.dishToAddLink(dishToAddLink);

    console.log(this.dishToAddByLink$)
  }
}
