// Lab VIII.4.1.
import { Money } from "../Money";

export class DiscountService {
    applyDiscount(total: Money, percent: number): Money {
        return total.multiply((100 - percent) / 100);
    }
}