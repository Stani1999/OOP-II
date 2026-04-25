// Lab I.3.2.
import { Product } from "./Product";

export class CartItem {
    constructor(
        // <Lab II.1.2.>
        private readonly _product: Product, // public -> private, product -> _product
        private _quantity: number           // public -> private
    )  { 
        if (_quantity <= 0)
            throw new Error("Quantity must be positive");
        // </Lab II.1.2.>
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
    totalPrice(): number {
        return this._product.price * this._quantity; // <Lab II.1.2./> product -> _product
    }
    // </Lab I.5.1.>
}