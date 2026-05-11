// Lab VII.2.1.
import { describe, it, expect } from "vitest";
import { AddToCart } from "../src/app/AddToCart";
import { InMemoryProductRepository } from "../src/infra/InMemoryProductRepository";
import { Cart } from "../src/oop/carts/Cart";

describe("AddToCart", () => {
    it("adds product to cart", async () => {
        const repo = new InMemoryProductRepository();
        const cart = new Cart();
        const useCase = new AddToCart(repo, cart);

        const result = await useCase.execute("1", 2);

        expect(result.success).toBe(true);
        expect(cart.totalItems()).toBe(2);
    });
});