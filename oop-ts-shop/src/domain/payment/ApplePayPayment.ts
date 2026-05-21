// Lab IX.4.1
import { IPaymentService, PaymentError } from "./IPaymentService";
import { Money } from "../Money";
import { Result, ok, fail } from "../../shared/Result";

export class ApplePayPayment implements IPaymentService {
    async pay(amount: Money): Promise<Result<void, PaymentError>> {
        console.log(`Apple Pay charged ${amount.format()}`);
        
        const success = Math.random() > 0.5;
        
        return success ? ok(undefined) : fail("PAYMENT_FAILED");
    }

    // < IX.4.3.>
    async refund(
        amount: Money
    ): Promise<Result<void, PaymentError>> {
        
        console.log(
            `${this.name()} refunded ${amount.format()}`);
        
        return ok(undefined);
    }

    // <IX.4.4.>
    supportsCurrency(currency: string): boolean {
        const supportedCurrencies = ["USD", "EUR", "PLN"];
        return supportedCurrencies.includes(currency);
    }
    // </IX.4.4.>

    // </IX.4.3.>
    name(): string {
        return "Apple Pay";
    }
}