// Lab V.4.1.
import { describe, it, expect } from "vitest";
import { CourierShipping } from "../src/domain/shipping/CourierShipping";

describe("Shipping", () => {
    it("calculates courier shipping", () => {

        const shipping = new CourierShipping();
        const result = shipping.calculate(2);
        
        expect(result.amount).toBeGreaterThan(0);
    });
});