// Lab I.3.2. Step 2. 
import { Product } from "./Product";

export class CartItem {
    constructor(
        public readonly product: Product,
        public _quantity: number
    ) {}

    get quantity(): number {
        return this._quantity;
    }

    increase(quantity: number): void {
        this._quantity += quantity;
    }
}