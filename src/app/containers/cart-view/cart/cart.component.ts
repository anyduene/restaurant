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
  @Output() createOrder = new EventEmitter();
  @Output() promoNotFound = new EventEmitter();

  constructor(private _snackBar: MatSnackBar) { }

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

  order() {
    this.createOrder.emit();
  }

  applyPromoCode() {
    const promo = PromoCodes.find(p => p.promo === this.promo);

    this.discount = promo ? promo.discount : 1;

    if(!promo) {
      this.promoNotFound.emit();
    }
  }
}
