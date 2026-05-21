// Lab IX.2.2.
// < IX.4.7.>
import { paymentConfig } from "./config/paymentConfig";                     
import { PaymentFactory } from "./domain/payment/PaymentFactory";               // <IX.4.7./> import { StripePayment } from "./domain/payment/StripePayment"; 
// </IX.4.7.>
import { Checkout } from "./app/Checkout";
import { Cart } from "./oop/carts/Cart";
import { Product } from "./oop/products/Product";
import { Money } from "./domain/Money";
import { FakeOrderRepository } from "./infra/FakeOrderRepository";
import { NotificationService } from "./domain/services/NotificationService";
import { CartValidator } from "./domain/services/CartValidator";
import { DiscountService } from "./domain/services/DiscountService";
import { LoggingService } from "./domain/services/LoggingService";

async function main() {
    const cart = new Cart();
    const product = new Product("1", "Laptop", new Money(5000, "PLN"));
    
    const paymentMethod = PaymentFactory.create(paymentConfig.preferredPayment); // <IX.4.7.> Use factory to create payment method based on config
    
    cart.add(product, 1);

    // <IX.4.7/> Delate: const payment = new StripePayment();
    const repo = new FakeOrderRepository();
    const notifier = new NotificationService();
    const validator = new CartValidator();
    const discountService = new DiscountService(10);
    const logger = new LoggingService();

    const checkout = new Checkout(
        paymentMethod,                                                          // <IX.4.7/> payment,
        repo,
        notifier,
        validator,
        discountService,
        logger
    );
    
    console.log(`--- Executing ${paymentMethod.name()} Checkout ---`);          // <IX.4.7.> Add log to indicate which payment method is being used
    const result = await checkout.execute(cart);
    
    console.log(result);
}

main();