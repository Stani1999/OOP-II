// Lab I.3.3. Step 3.
import { Product } from "./Product";
import { CartItem } from "./CartItem";

export class Cart {
  private items: CartItem[] = [];

  add(product: Product, quantity: number): void {
    const existing = this.items.find(item => item.product.id === product.id);
    if (existing) {
      existing.increase(quantity);
    } else {
      this.items.push(new CartItem(product, quantity));
    }
  }

  totalItems(): number {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  }
}