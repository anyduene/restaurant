import { Injectable } from '@angular/core';
import { Category } from './category';
import { CATEGORIES } from './categories';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  getCategories(): Category[] {
    return CATEGORIES;
  }

  constructor() { }
}
