// Lab III.1.1.
import { Currency } from "./Currency"; // <III.3.2./> // Import Currency type

export class Money {
    private readonly _amount: number;
    private readonly _currency: Currency; // <III.3.2.> // string -> Currency

    constructor(amount: number, currency: Currency = "PLN") { // <III.3.2.> // string -> Currency
        if (amount < 0) 
            throw new Error("Amount cannot be negative");
        
        this._amount = amount;
        this._currency = currency;
    }

    get amount(): number {
        return this._amount
    }

    get currency(): Currency { // <III.3.2.> // string -> Currency
        return this._currency
    }

    add(other: Money): Money {
        this.assertSameCurrency(other);
        return new Money(this._amount + other._amount, this._currency);
    }

    multiply(factor: number): Money {
        return new Money(this._amount * factor, this._currency);
    }

    format(): string {
        return `${(this._amount / 100).toFixed(2)} ${this._currency}`;
    }

    private assertSameCurrency(other: Money): void {
        if (this._currency !== other._currency) {
            throw new Error("Currency mismatch");
        }
    }

    // <III.3.1.>
    equals(other: Money): boolean {
        return this._amount === other._amount && this._currency === other._currency;
    }
    // </III.3.1.>
}
