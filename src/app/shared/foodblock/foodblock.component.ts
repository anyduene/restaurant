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

  onAddToCart() {
    this.addToCart.emit(this.dish);
  }

  constructor(private snackBar: MatSnackBar) { }

  openSnackBar() {
    this.snackBar.open('Dish added to cart', undefined, {
      duration: 1500,
      panelClass: ['green-snackbar']
    });
  }
}