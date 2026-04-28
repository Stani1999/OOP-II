// <IV.1.> ! This Version is outdated ! 
// New version of CartItem class is in src/oop/carts/CartItem.ts

// Lab I.3.2.
import { Money } from "../domain/Money";    // <III.1.2./> 
import { Product } from "./Product";

export class CartItem {
    constructor(
        // <II.1.2.>
        private readonly _product: Product, // public -> private, product -> _product
        private _quantity: number           // public -> private
    )  { 
        if (_quantity <= 0)
            throw new Error("Quantity must be positive");
        // </I.1.2.>
    }

    get product(): Product {
        return this._product;
    }

    get quantity(): number {
        return this._quantity;
    }

    increase(quantity: number): void {
        // <Lab II.1.2.>
        if (quantity <= 0)
            throw new Error("Quantity must be positive");
        // </Lab II.1.2.>
        this._quantity += quantity;
    }

    // <Lab I.5.1.>
    // <III.1.2.> Commented out old or replace implementation using numbers
    // totalPrice(): number {
    //     return this._product.price * this._quantity; // <II.1.2./> product -> _product 
    totalPrice(): Money {
        return new Money(this._product.price.amount * this._quantity); // 
    }
    // </III.1.2.>
    // </Lab I.5.1.>
}