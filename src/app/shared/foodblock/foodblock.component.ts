import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Dish } from 'src/app/models/dish';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-foodblock',
  templateUrl: './foodblock.component.html',
  styleUrls: ['./foodblock.component.scss']
})

export class FoodblockComponent {
  @Input() dish!: Dish;
  @Output() addToCart = new EventEmitter<Dish>();
  added: boolean = false;

  onAddToCart() {
    this.addToCart.emit(this.dish);
    this.added = true;
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