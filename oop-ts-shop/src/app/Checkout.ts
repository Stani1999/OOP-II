//Lab V.3.3.              
import { Money } from "../domain/Money";
import { ShippingMethod } from "../domain/shipping/ShippingMethod";
import { Cart } from "../oop/carts/Cart";

export class Checkout {
    constructor(
        private readonly shipping: ShippingMethod) {}

    calculate(cart: Cart): Money{
        const shippingCost = this.shipping.calculate(cart.getTotalSize(),cart.totalPrice());
        return cart.totalPrice().add(shippingCost);
    }
}

// // Lab VI.1.2.
// import { Money } from "../domain/Money";
// import { Result, ok, fail } from "../shared/Result"; 

// type CheckoutError =
// | "EMPTY_CART"
// | "PAYMENT_FAILED";


// export class Checkout {
//     calculate(totalItems: number): Result<Money, CheckoutError> {
//         if (totalItems === 0) {
//             return fail("EMPTY_CART");
//         }

//         // symulacja
//         const paymentSuccess = Math.random() > 0.5;
    
//         if (!paymentSuccess) {
//             return fail("PAYMENT_FAILED");
//         }
    
//         return ok(new Money(1000));
//     }
// }
