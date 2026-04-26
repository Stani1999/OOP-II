// Lab I.3.3.
import { Money } from "../domain/Money";                // <III.1.2./> Add import line for Money
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
  totalPrice(): Money {                                 // <III.1.2./> number -> Money
    return this.items.reduce(
      (sum, item) => 
  // <III.1.2.> 
  //  sum + item.product.price * item.quantity, 0);     // <III.1.2./> Commented out old implementation using numbers             
      sum.add(item.product.price.multiply(item.quantity)), 
    new Money(0)
  ); 
  // </III.1.2.>
  }
  // </Lab I.5.1.>
  
    // <Lab II.1.4>
  discountedTotalPricePercent(percent: number): Money { // <III.1.2./> number -> Money
    if (percent < 0 || percent > 100) {
      throw new Error("Percentage must be between 0 and 100");
    }
    const total = this.totalPrice();
    //  <III.1.2.>
    // return total - (total * percent / 100);          // <III.1.2./> Commented out old implementation using numbers
    return total.multiply((100 - percent) / 100);
    //  </III.1.2.>
  }
  // </Lab II.1.4>
}