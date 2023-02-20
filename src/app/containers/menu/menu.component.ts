import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  categories$ = this.menuService.categories$;
  mostPopular$ = this.menuService.mostPopularDishes$;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.reset();
  }
}