// Lab VIII.1.5.
import { Cart } from "../../oop/carts/Cart";

export class CartValidator {
    validate(cart: Cart): boolean {
        return cart.totalItems() > 0;
    }
}