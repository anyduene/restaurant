import { Component, Input } from '@angular/core';
import { Dish } from 'src/app/models/dish';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss']
})
export class DishDetailComponent {
  @Input() dish!: Dish;
}
