import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Dish } from 'src/app/models/dish';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss']
})
export class DishDetailComponent {
  @Input() dish!: Dish;
  @Output() addToCart = new EventEmitter<Dish>();

  onAddToCart() {
    this.addToCart.emit(this.dish);
  }

  constructor(private _snackBar: MatSnackBar) { }

  openSnackBar() {
    this._snackBar.openFromComponent(PizzaPartyComponent, {
      duration: 1500,
      panelClass: ['blue-snackbar'],
    });
  }
}

@Component({
  selector: 'snack-bar-component-example-snack',
  templateUrl: 'snack-bar.html',
  styles: [],
})
export class PizzaPartyComponent { }
