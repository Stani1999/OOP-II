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
// <IX.3.2.>
import { FakePaymentSuccess, FakePaymentFailure } from "../src/domain/payment/FakePayment";
import { Product } from "../src/oop/products/Product";
import { Money } from "../src/domain/Money";
// </IX.3.2.>

describe("Checkout", () => {
    it("fails for empty cart", async () => {
        const checkout = new Checkout(
            new FakePaymentSuccess(), // <IX.3.2./>
            //new CreditCardPayment(), // <IX.3.2.> // <VIII.5.1./> PaymentService -> CreditCardPayment
            new FakeOrderRepository(),
            new NotificationService(),
            new CartValidator()
            // <VIII.5.1.> Add new services to the constructor
            ,new DiscountService(10),
            new LoggingService()
            // </VIII.5.1.>
        );

        const result = await checkout.execute(new Cart());

        expect(result.success).toBe(false);
    });

    // <IX.3.2.>
    it("returns success with FakePaymentSuccess", async () => {
        const checkout = new Checkout(
            new FakePaymentSuccess(),
            new FakeOrderRepository(),
            new NotificationService(),
            new CartValidator(),
            new DiscountService(10),
            new LoggingService()
        );
        const cart = new Cart();
        const product = new Product("1", "Test", new Money(100, "PLN"));
        
        cart.add(product, 1);
        const result = await checkout.execute(cart);
        
        expect(result.success).toBe(true);
    });

    it("handles payment failure with FakePaymentFailure", async () => {
        const checkout = new Checkout(
            new FakePaymentFailure(),
            new FakeOrderRepository(),
            new NotificationService(),
            new CartValidator(),
            new DiscountService(10),
            new LoggingService()
        );
        const cart = new Cart();
        const product = new Product("1", "Test", new Money(100, "PLN"));
        
        cart.add(product, 1);
        const result = await checkout.execute(cart);
        
        expect(result.success).toBe(false);
    });
    // </IX.3.2.>
});
