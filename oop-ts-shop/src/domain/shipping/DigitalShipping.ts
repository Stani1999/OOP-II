// Lab V.5.7.
import { Money } from "../Money";
import { ShippingMethod } from "./ShippingMethod";
import { Size } from "../Size";

export class DigitalShipping implements ShippingMethod {
    calculate(size: Size, cartTotal: Money): Money {
        this.validate(size);
        return new Money(0);
    }

    validate(size: Size): void {
        if (size.unit !== "MB") {
            throw new Error(`Digital delivery does not support physical unit: ${size.unit}`);
        }
    }

    name(): string {
        return "Digital Download";
    }

    estimatedDeliveryDays(): number {
        return 0;
    }
}