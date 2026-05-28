//Lab VIII.1.2.
// <X.3.1.>
import { EventBus } from "../shared/EventBus";
import { OrderPaidEvent } from "../domain/events/OrderPaidEvent";
// </X.3.1.>
import { Result, ok, fail } from "../shared/Result";
import { Cart } from "../oop/carts/Cart";
// import { PaymentService } from "../domain/services/PaymentService"; // <VIII.5.1.>
import { IOrderRepository } from "../domain/IOrderRepository";
import { NotificationService } from "../domain/services/NotificationService";
import { CartValidator } from "../domain/services/CartValidator";
// <VIII.5.1.>
import { IPaymentService } from "../domain/payment/IPaymentService";
import { DiscountService } from "../domain/services/DiscountService";
import { LoggingService } from "../domain/services/LoggingService";
// </VIII.5.1.>


type CheckoutError = 
|"EMPTY_CART" 
| "PAYMENT_FAILED";

export class Checkout {
    constructor(
        private readonly payment: IPaymentService,    // <VIII.5.1.> PaymentService -> IPaymentService
        private readonly repo: IOrderRepository,
        private readonly eventBus: EventBus,                // <X.3.1.> private readonly notifier: NotificationService -> eventBus: EventBus
        private readonly validator: CartValidator
        // <VIII.5.1.> // Add new services to constructor:
        ,private readonly discountService: DiscountService,
        private readonly logger: LoggingService
        // </VIII.5.1.>

    ) {}

    async execute(cart: Cart): Promise<Result<void, CheckoutError>> {
        this.logger.log("Starting checkout process"); // <VIII.5.1./> Add Log at the beginning of execute method

        if (!this.validator.validate(cart)) {
            this.logger.log("Checkout failed: Cart is empty"); // <VIII.5.1./> Add Log validation failure in execute method
            return fail("EMPTY_CART");
        }

        const total = cart.totalPrice();

        // <VIII.5.1.> Add discount application and update payment logic to handle Result type
        const discountedTotal = this.discountService.applyDiscount(total);
        const paymentResult = await this.payment.pay(discountedTotal);

        // <VIII.5.1.> Replace old payment logic
        //const success = this.payment.pay(total);

        //if (!success) {
        //    return fail("PAYMENT_FAILED");
        //}

        // <VIII.5.1.> Add Log payment failure in execute method
        if (!paymentResult.success) {
            this.logger.log("Checkout failed: Payment unsuccessful");
            return fail("PAYMENT_FAILED");
        }
        // </VIII.5.1.>

        await this.repo.save({
            items: cart.getItems(),
            total: discountedTotal // <VIII.5.1./> total -> total: discountedTotal
        });

        // <X.3.1.>this.notifier.send() -> await this.eventBus.publish(...)
        await this.eventBus.publish(
            new OrderPaidEvent(
                "order-1", 
                discountedTotal
            )
        );
        // <X.3.1.>

        this.logger.log("Checkout completed successfully"); // <VIII.5.1./> Add Log at the end of execute method

        return ok(undefined);
    }
}

// Old implementation before VIII.1.2.:

// //Lab V.3.3.              
// import { Money } from "../domain/Money";
// import { ShippingMethod } from "../domain/shipping/ShippingMethod";
// import { Cart } from "../oop/carts/Cart";
// // <VI.1.1.2.>
// import { Result, ok, fail } from "../shared/Result";

// type CheckoutError =
// | "EMPTY_CART"
// | "PAYMENT_FAILED";

// export class Checkout {
//     constructor(
//         private readonly cart: Cart, // <VII.1.2./> Add cart to constructor as first parameter
//         private readonly shipping: ShippingMethod
//         ) {}
// // <VII.1.2.> Replacae all lines below with new logic:

//     execute(): Result<Money, CheckoutError> {
//         if (this.cart.totalItems() === 0) {
//             return fail("EMPTY_CART");
//         }

//         const total = this.cart.totalPrice();
//         const shippingCost = this.shipping.calculate(
//             this.cart.getTotalSize(),
//             total
//         );

//         return ok(total.add(shippingCost));
//     }    
//     // // <VI.1.2.>
//     // // calculate(cart: Cart): Money{
//     // //     const shippingCost = this.shipping.calculate(cart.getTotalSize(),cart.totalPrice());
//     // //     return cart.totalPrice().add(shippingCost);
//     // // }
//     // calculate(cart: Cart): Result<Money, CheckoutError> {
//     //     if (cart.totalItems() === 0) {
//     //         return fail("EMPTY_CART");
//     //     }

//     //     // Simulate payment processing with a random success/failure outcome
//     //     const paymentSuccess = Math.random() > 0.5;

//     //     if (!paymentSuccess) {
//     //         return fail("PAYMENT_FAILED");
//     //     }

//     //     const shippingCost = this.shipping.calculate(
//     //         cart.getTotalSize(),
//     //         cart.totalPrice()
//     //     );

//     //     const totalWithShipping = cart.totalPrice().add(shippingCost);

//     //     return ok(totalWithShipping);
//     // }
//     // </VI.1.2.>
// // </VII.1.2.>
// }