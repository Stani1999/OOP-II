// Lab VIII.4.1.
import { Money } from "../Money";

export class DiscountService {
    constructor(private readonly percentage: number) {}

    applyDiscount(total: Money): Money {
        const discountAmount = Math.round(total.amount * (this.percentage / 100));
        return new Money(total.amount - discountAmount, total.currency);
    }
}