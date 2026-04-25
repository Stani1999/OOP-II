// Lab I.4.1.
import { describe, it, expect } from "vitest";
import { Cart } from "../src/oop/Cart";
import { Product } from "../src/oop/Product";

describe("Cart", () => {
    it("adds products correctly", () => {
        const cart = new Cart();
        const p = new Product("1","Laptop", 3000);

        cart.add(p, 2);
        cart.add(p, 1);

        expect(cart.totalItems()).toBe(3);
    });

// <II.1.5.>
    describe("Lab II - Encapsulation & Validation", () => {
        // <II.1.1.>
        // Tests Product class invariants (empty strings and negative prices)
        it("should throw error for invalid product data", () => {
            expect(() => new Product("", "Laptop", 3000)).toThrow(); 
            expect(() => new Product("1", "Laptop", -100)).toThrow(); 
        });
        // </II.1.1.>

        // <II.1.2.>
        // Tests if non-positive quantity is rejected during addition
        it("should throw error for non-positive quantity", () => {
            const cart = new Cart();
            const p = new Product("1", "Laptop", 3000);
            // The string matches the Error message in CartItem constructor and increase method
            expect(() => cart.add(p, 0)).toThrow("Quantity must be positive"); 
        });
        // </II.1.2.>

        // <II.1.4.>
        // Verifies the additional task: percentage discount calculation
        it("should calculate price with discount correctly", () => {
            const cart = new Cart();
            cart.add(new Product("1", "Laptop", 1000), 1);
            expect(cart.discountedTotalPricePercent(20)).toBe(800); 
        });
        // </II.1.4.>
    });
    // </II.1.5.>
});