import { Dish } from "./dish";

export interface CartItem {
    count: number;
    totalCost: number;
    dish: Dish;
}