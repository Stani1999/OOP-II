// Lab IV.4.1. 
import { describe, it, expect } from "vitest";
import { Product } from "../src/oop/products/Product";
import { ShippingFeature } from "../src/oop/products/ShippingFeature";

describe("Product features", () => {
    it("supports multiple features:", () => {
        const product = new Product("1", "Test", [
            new ShippingFeature(2)
        ]);

        const shipping = product.getFeature(ShippingFeature);

        expect(shipping?.[0]?.weight).toBe(2); // <IV.5.6/> weight -> [0]?.weight
    });
    // <IV.6.2>
        it("should not allow duplicate unique features", () => {
        expect(() => new Product("1", "Test", [
            new ShippingFeature(2),
            new ShippingFeature(3) // Duplicate unique feature
        ])).toThrow("Product cannot have duplicate unique features.");
    });
    // </IV.6.2>
});