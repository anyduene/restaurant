import { Component } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { FilterService } from 'src/app/services/filter.service';
import { Dish } from 'src/app/models/dish';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.scss']
})
export class CategoryViewComponent {
  dishesByCategory: Dish[] = [];
  category?: Category;
  foundDish?: Dish = undefined;
  saleDishes: Dish[] = [];
  
  //categoryId: number = 0;
  //*ngIf="categoryId!=4"
  //this.categoryId = this.category.id
  

  constructor(
    private route: ActivatedRoute,
    private menuService: MenuService,
    private filterSercive: FilterService,
  ) {}

  ngOnInit() {
    const categoryName = this.route.snapshot.params['category'];
    this.category = this.menuService.getCategoryByName(categoryName);
    
    if (this.category) {
      this.dishesByCategory = this.menuService.getDishesByCategory(this.category.id);
      
    }
  }

  onInputChange(inputValue: string) {
    if(inputValue!=''){
      this.foundDish = this.filterSercive.getDishByName(inputValue, this.dishesByCategory)
    } else {
      inputValue = '';
    }
  }

  onCheckboxChanged(checkboxStatus: boolean) {
    if(checkboxStatus != true) {
      this.saleDishes = this.filterSercive.getSaleDishes(this.dishesByCategory) 
    } else {
      this.saleDishes = [];
    } 
  }
}
