// Lab IX.1.3.
import { IPaymentService, PaymentError } from "./IPaymentService";
import { Money } from "../Money";
import { Result, ok } from "../../shared/Result";

export class PayPalPayment implements IPaymentService {
    async pay(
        amount: Money
        ) {
        console.log(
            `PayPal charged ${amount.format()}`
        );
    return ok(undefined);
    }

    // < IX.4.3.>
    async refund(
        amount: Money
    ): Promise<Result<void, PaymentError>> {
        
        console.log(
            `${this.name()} refunded ${amount.format()}`);
        
        return ok(undefined);
    }
    // </IX.4.3.>

    // <IX.4.4.>
    supportsCurrency(currency: string): boolean {
        const supportedCurrencies = ["USD", "EUR", "PLN"];
        return supportedCurrencies.includes(currency);
    }
    // </IX.4.4.>

    name(): string {
        return "PayPal";
    }
}