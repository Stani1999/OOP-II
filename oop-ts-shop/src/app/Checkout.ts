// Lab V.3.3.
import { Money } from "../domain/Money";
import { ShippingMethod } from "../domain/shipping/ShippingMethod";
import { Cart } from "../oop/carts/Cart";

export class Checkout {
    constructor(
        private readonly shipping: ShippingMethod) {}

    calculate(cart: Cart): Money{
        const shippingCost = this.shipping.calculate(cart.getTotalWeight());
        return cart.totalPrice().add(shippingCost);
    }
}
