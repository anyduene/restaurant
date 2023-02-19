import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Dish } from 'src/app/models/dish';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss']
})
export class DishDetailComponent {
  @Input() dish!: Dish;

  diameter = new FormControl(25);
}
