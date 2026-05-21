// Lab VIII.4.4.
import { IPaymentService, PaymentError } from "./IPaymentService";
import { Money } from "../Money";
import { Result, ok, fail } from "../../shared/Result";

export class CreditCardPayment implements IPaymentService {

    async pay(amount: Money): Promise<Result<void, PaymentError>> {
        console.log(`Credit Card charged ${amount.format()}`);
        return Math.random() > 0.5 ? ok(undefined) : fail("PAYMENT_FAILED"); // Simulate random payment success/failure
    }

    name(): string {
        return "Credit Card";
    }
}