// Lab VIII.1.2.
import { Money } from "../Money";

export class PaymentService {
    pay(amount: Money): boolean {
        return Math.random() > 0.5;
    }
}