import { Cart } from "../oop/carts/Cart";
import { Result, ok } from "../shared/Result";

export class ClearCart {
    constructor(private readonly cart: Cart) {}

    execute(): Result<void, never> {
        this.cart.clear(); 
        return ok(undefined);
    }
}