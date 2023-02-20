import { Component } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { Dish } from 'src/app/models/dish';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dish-detail-view',
  templateUrl: './dish-detail-view.component.html',
  styleUrls: ['./dish-detail-view.component.scss']
})
export class DishDetailViewComponent {
  dish$ = this.menuService.selectedDish$;

  constructor(
    private route: ActivatedRoute,
    private menuService: MenuService,
  ) { }

  ngOnInit() {
    const dishLink = this.route.snapshot.params['dish'];
    this.menuService.setSeletedDishByLink(dishLink);
  }
}
