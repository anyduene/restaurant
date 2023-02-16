import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Dish } from '../../dish';

@Component({
  selector: 'app-foodlist',
  templateUrl: './foodlist.component.html',
  styleUrls: ['./foodlist.component.scss']
})
export class FoodlistComponent {
  @Input() mostpop: Dish[] = [];
  @Input() pizzalist: Dish[] = [];

  constructor(public router: Router){}
}