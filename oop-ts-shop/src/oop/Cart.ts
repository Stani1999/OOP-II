// Lab I.3.3.
import { Product } from "./Product";
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

  // <Lab I.5.3.>
  remove(productId: string): void {
    this.items = this.items.filter(item => item.product.id !== productId);
  }
  // </Lab I.5.3.>

  totalItems(): number {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  }

  // <Lab I.5.1.>
  totalPrice(): number {
    return this.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }
  // </Lab I.5.1.>
  
    // <Lab II.1.4>
  discountedTotalPricePercent(percent: number): number {
    if (percent < 0 || percent > 100) {
      throw new Error("Percentage must be between 0 and 100");
    }
    const total = this.totalPrice();
    return total - (total * percent / 100);
  }
  // </Lab II.1.4>
}