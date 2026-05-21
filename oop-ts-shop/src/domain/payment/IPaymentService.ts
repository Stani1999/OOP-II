// Lab VIII.4.3.
import { Money } from "../Money";
import { Result } from "../../shared/Result";

export type PaymentError = 
| "PAYMENT_FAILED" 
| "CURRENCY_MISMATCH";

export interface IPaymentService {
    pay(amount: Money): Promise<Result<void, PaymentError>>;
    name(): string;
}