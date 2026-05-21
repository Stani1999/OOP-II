// Lab IX.2.5.
import { IPaymentService, PaymentError } from "./IPaymentService";
import { Money } from "../Money";
import { Result, ok } from "../../shared/Result";

export class CryptoPayment
    implements IPaymentService {

    async pay(amount: Money) {
        console.log(
            `Crypto charged ${amount.format()}`
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
        return "Crypto";
    }
}