// Lab III.1.3.
import { describe, it, expect } from "vitest";
import { Money } from "../src/domain/Money";

describe("Money", () => {
    it("adds correctly", () => {
        const a = new Money(1000);
        const b = new Money(500);
        const result = a.add(b);
        
        expect(result.amount).toBe(1500);
    });

    it ("multiplies mismatch", () => {
        const a = new Money(1000, "PLN");
        const b = new Money(500, "USD");

        expect(() => a.add(b)).toThrow("Currency mismatch");
    });

    // <III.3.4.> Additional Tasks Testing
    it("should return true for identical money values (equals method)", () => {
        const a = new Money(99, "PLN");
        const b = new Money(99, "PLN");
        
        expect(a.equals(b)).toBe(true); 
    });

        it("should allow creating money only with valid currencies (Union Type)", () => {
        const pln = new Money(21, "PLN");
        const eur = new Money(37, "EUR");
        const usd = new Money(97, "USD");

        expect(pln.currency).toBe("PLN");
        expect(eur.currency).toBe("EUR");
        expect(usd.currency).toBe("USD");
    });

    it("should return false for different amounts or currencies (equals method)", () => {
        const a = new Money(69, "PLN");
        const b = new Money(67, "PLN");
        const c = new Money(69, "USD");

        expect(a.equals(b)).toBe(false); 
        expect(a.equals(c)).toBe(false); 
    });
    // </III.3.4.>
});