// Lab VIII.3.1.
import { describe, it, expect } from "vitest";
import { Checkout } from "../src/app/Checkout";
import { Cart } from "../src/oop/carts/Cart";
// import { PaymentService } from "../src/domain/services/PaymentService"; // <VIII.5.2.> Remove PaymentService
import { NotificationService } from "../src/domain/services/NotificationService";
import { CartValidator } from "../src/domain/services/CartValidator";
import { FakeOrderRepository } from "../src/infra/FakeOrderRepository"; // <VIII.3.3./>
// <VIII.5.1.> Add imports for new services and interfaces
import { CreditCardPayment } from "../src/domain/payment/CreditCardPayment";
import { DiscountService } from "../src/domain/services/DiscountService";
import { LoggingService } from "../src/domain/services/LoggingService";
// </VIII.5.1.>

describe("Checkout", () => {
    it("fails for empty cart", async () => {
        const checkout = new Checkout(
            new CreditCardPayment(), // <VIII.5.1./> PaymentService -> CreditCardPayment
            new FakeOrderRepository(),
            new NotificationService(),
            new CartValidator()
            // <VIII.5.1.> Add new services to the constructor
            ,new DiscountService(),
            new LoggingService()
            // </VIII.5.1.>
        );

        const result = await checkout.execute(new Cart());

        expect(result.success).toBe(false);
    });
});
