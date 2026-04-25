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
});