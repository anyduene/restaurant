import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { CATEGORIES } from './categories';
import { Dish } from '../models/dish';
import { dishes } from './dishes';
import { BehaviorSubject, Observable, combineLatest, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private searchName = new BehaviorSubject('');
  searchName$ = this.searchName.asObservable();

  private onlySale = new BehaviorSubject(false);
  onlySale$ = this.onlySale.asObservable();

  private categories = new BehaviorSubject(CATEGORIES);
  categories$ = this.categories.asObservable();

  private selectedCategoryId = new BehaviorSubject<number | null>(null);
  selectedCategoryId$ = this.selectedCategoryId.asObservable();

  private dishes = new BehaviorSubject(dishes);
  dishes$ = this.dishes.asObservable();
  mostPopularDishes$ = this.dishes$.pipe(
    map(dishes => dishes.filter(dish => dish.mostPopular))
  );

  private selectedDishLink = new BehaviorSubject('');
  selectedDishLink$ = this.selectedDishLink.asObservable();

  selectedDish$ = combineLatest([
    this.dishes$,
    this.selectedDishLink$,
  ]).pipe(
    map(([dishes, link]) => {
      return dishes.find(dish => dish.link.toLowerCase() === link.toLowerCase());
    }),
  )

  selectedCategory$ = combineLatest([
    this.categories$,
    this.selectedCategoryId$,
  ]).pipe(
    map(([categories, selectedCategoryId]) => {
      return categories.find(category => category.id === selectedCategoryId);
    }),
  )

  filteredDishes$ = combineLatest([
    this.dishes$,
    this.selectedCategoryId$,
    this.searchName$,
    this.onlySale$,
  ]).pipe(
    map(([dishes, catId, search, sale]) => {
      return dishes
        .filter(dish => !catId || dish.categoryId === catId)
        .filter(dish => !search || dish.name.toLocaleLowerCase().includes(search))
        .filter(dish => !sale || dish.sale);
    })
  );

  reset() {
    this.selectedCategoryId.next(null);
    this.searchName.next('');
    this.onlySale.next(false);
  }

  setSearchName(name: string) {
    this.searchName.next(name.toLocaleLowerCase());
  }

  setOnlySale(value: boolean) {
    this.onlySale.next(value);
  }

  selectCategoryByName(name: string) {
    const category = this.categories.value
      .find(category => category.name.toLowerCase() === name.toLowerCase());

    this.selectedCategoryId.next(category?.id || null);
  }

  setSeletedDishByLink(link: string) {
    this.selectedDishLink.next(link);
  }
}
