// Lab V.2.1.
// Old version of CartItem in src/oop/CartItem.ts
import { Money } from "../../domain/Money";    
import { Product } from "../products/Product";

export class CartItem {
    constructor(
        private readonly _product: Product, 
        private _quantity: number           
    )  { 
        if (_quantity <= 0)
            throw new Error("Quantity must be positive");
    }

    get product(): Product {
        return this._product;
    }

    get quantity(): number {
        return this._quantity;
    }

    increase(quantity: number): void {
        if (quantity <= 0)
            throw new Error("Quantity must be positive");

        this._quantity += quantity;
    }

    totalPrice(): Money {
        return new Money(this._product.price.amount * this._quantity); 
    }
}