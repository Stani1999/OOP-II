// Lab VIII.4.3. + IX.1.
import { Money } from "../Money";
import { Result } from "../../shared/Result";

export type PaymentError = 
| "UNSUPPORTED_CURRENCY"                                        // <IX.4.4/>
| "REFUND_FAILED"                                               // <IX.4.3/>
| "PAYMENT_FAILED" 
| "CURRENCY_MISMATCH";

export interface IPaymentService {
    pay(amount: Money): Promise<Result<void, PaymentError>>;
    refund(amount: Money): Promise<Result<void, PaymentError>>; // <IX.4.3/>
    supportsCurrency(currency: string): boolean;                // <IX.4.4/>
    name(): string;
}