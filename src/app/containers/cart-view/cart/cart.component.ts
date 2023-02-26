import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { Dish } from 'src/app/models/dish';
import { Promo } from 'src/app/models/promo';
import { PromoCodes } from 'src/app/services/promo-codes';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  @Input() cartItems: CartItem[] = [];
  @Input() totalCount!: number;
  @Input() totalCost!: number;
  @Input() totalDiscount!: number;

  @Output() increaseCount = new EventEmitter<string>();
  @Output() decreaseCount = new EventEmitter<string>();
  @Output() removeDish = new EventEmitter<string>();

  cookingTimeOptions = [
    { name: 'Standard', value: 0 },
    { name: 'Fast (+100₴)', value: 10000 },
  ];
  cookingTime: number = this.cookingTimeOptions[0].value;

  get totalAmount() {
    return this.totalCost + this.cookingTime;
  }

  itemsCheckout: CartItem[] = [];
  show: boolean = false;

  promo: string = '';
  discount: number = 1;

  constructor(private _snackBar: MatSnackBar) { }

  onIncrease(link: string) {
    this.increaseCount.emit(link);
    console.log(this.totalDiscount)
  }

  onDecrease(link: string) {
    this.decreaseCount.emit(link);
    console.log(this.totalDiscount)
  }

  onRemove(link: string) {
    this.removeDish.emit(link);
  }

  onCheckout() {
    this.itemsCheckout = this.cartItems;
  }

  showForm() {
    this.show = true;
  }

  closeForm() {
    this.show = false;
  }

  applyPromoCode() {
    this.discount = this.searchPromoCode(this.promo);
    console.log(this.discount)
  }

  searchPromoCode(inputText: string): number {
    const promo = PromoCodes.find(p => p.promo === inputText);
    if(promo) {
      return promo.discount;
    } else {
      this._snackBar.openFromComponent(PizzaPartyComponent, {
        duration: 1500,
        panelClass: ['red-snackbar'],
      });
      return 1;
    }
  }
}

@Component({
  selector: 'snack-bar-component-example-snack',
  templateUrl: 'snack-bar.html',
  styles: [],
})
export class PizzaPartyComponent { }

