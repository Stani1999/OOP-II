// Lab VII.3.1.
import { Cart } from "../oop/carts/Cart";
import { Result, ok } from "../shared/Result";

export class RemoveFromCart {
    constructor(private readonly cart: Cart) {}

    execute(productId: string): Result<void, never> {
        this.cart.remove(productId);
        return ok(undefined);
    }
}