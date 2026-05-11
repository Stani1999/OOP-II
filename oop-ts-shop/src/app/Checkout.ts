//Lab V.3.3.              
import { Money } from "../domain/Money";
import { ShippingMethod } from "../domain/shipping/ShippingMethod";
import { Cart } from "../oop/carts/Cart";
// <VI.1.1.2.>
import { Result, ok, fail } from "../shared/Result";

type CheckoutError =
| "EMPTY_CART"
| "PAYMENT_FAILED";

export class Checkout {
    constructor(
        private readonly cart: Cart, // <VII.1.2./> Add cart to constructor as first parameter
        private readonly shipping: ShippingMethod
        ) {}
// <VII.1.2.> Replacae all lines below with new logic:

    execute(): Result<Money, CheckoutError> {
        if (this.cart.totalItems() === 0) {
            return fail("EMPTY_CART");
        }

        const total = this.cart.totalPrice();
        const shippingCost = this.shipping.calculate(
            this.cart.getTotalSize(),
            total
        );

        return ok(total.add(shippingCost));
    }    
    // // <VI.1.2.>
    // // calculate(cart: Cart): Money{
    // //     const shippingCost = this.shipping.calculate(cart.getTotalSize(),cart.totalPrice());
    // //     return cart.totalPrice().add(shippingCost);
    // // }
    // calculate(cart: Cart): Result<Money, CheckoutError> {
    //     if (cart.totalItems() === 0) {
    //         return fail("EMPTY_CART");
    //     }

    //     // Simulate payment processing with a random success/failure outcome
    //     const paymentSuccess = Math.random() > 0.5;

    //     if (!paymentSuccess) {
    //         return fail("PAYMENT_FAILED");
    //     }

    //     const shippingCost = this.shipping.calculate(
    //         cart.getTotalSize(),
    //         cart.totalPrice()
    //     );

    //     const totalWithShipping = cart.totalPrice().add(shippingCost);

    //     return ok(totalWithShipping);
    // }
    // </VI.1.2.>
// </VII.1.2.>
}