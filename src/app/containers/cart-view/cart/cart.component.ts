import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { Dish } from 'src/app/models/dish';
import { Promo } from 'src/app/models/promo';
import { PromoCodes } from 'src/app/services/promo-codes';

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

  itemsCheckout: CartItem[] = [];
  show: boolean = false;

  promo: string = '';
  discount: number = 1;

  cookingTime: number = this.cookingTimeOptions[0].value;

  get totalAmount() {
    return this.totalCost + this.cookingTime;
  }

  onIncrease(link: string) {
    this.increaseCount.emit(link);
  }

  onDecrease(link: string) {
    this.decreaseCount.emit(link);
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
  }

  searchPromoCode(inputText: string): number {
    const promo = PromoCodes.find(p => p.promo === inputText);
    return promo ? promo.discount : 1;
  }
}

