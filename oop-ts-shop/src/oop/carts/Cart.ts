// Lab V.2.0.
// Old version of Cart class before moving in src/oop/Cart.ts
import { Money } from "../../domain/Money";                  
import { Product } from "../products/Product";
import { CartItem } from "./CartItem";

export class Cart {
  private items: CartItem[] = [];

  add(product: Product, quantity: number): void {                
    const existing = this.items.find(item => item.product.id === product.id);
    // <Lab I.5.2.>
    if (quantity <=0) {                                   
      throw new Error("Quantity must be positive");
    }// </Lab I.5.2.>
    if (existing) {
      existing.increase(quantity);
    } else {
      this.items.push(new CartItem(product, quantity));  
    }
  }

  remove(productId: string): void {
    this.items = this.items.filter(item => item.product.id !== productId);
  }

  totalItems(): number {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  }

  totalPrice(): Money {                                   
    return this.items.reduce(
      (sum, item) => 
             
      sum.add(item.product.price.multiply(item.quantity)), 
    new Money(0)
  ); 
  }

  discountedTotalPricePercent(percent: number): Money {   
    if (percent < 0 || percent > 100) {
      throw new Error("Percentage must be between 0 and 100");
    }
    const total = this.totalPrice();

    return total.multiply((100 - percent) / 100);
  }


  // <V.2.2.>
  getTotalWeight(): number {
    return this.items.reduce(
      (sum, item) => sum + (item.quantity * 1), 0);
  }
  // </V.2.2.>
}