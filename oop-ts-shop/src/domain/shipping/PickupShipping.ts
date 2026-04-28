// Lab V.1.4.
import { Size } from "../Size";                             // <V.5.6./>
import { Money } from "../Money";
import { ShippingMethod } from "./ShippingMethod";

export class PickupShipping implements ShippingMethod {
    private readonly MAX_WEIGHT = 100; // <V.5.4./>
    private readonly FreeDeliveryThreshold = 0;  // <V.5.5./>
    calculate(size: Size                                    // <V.5.6./> weight : number
        , cartTotal: Money                                  // <V.5.5./>
        ): Money {

        // <V.5.5.>
        if (cartTotal.amount >= this.FreeDeliveryThreshold) {
                    return new Money(0);
        }
        // </V.5.5.>

        return new Money(0);
    }

    name(): string {
        return "Pickup";
    }

    // <V.5.3.>
    estimatedDeliveryDays(): number {
        return 0;
    }
    // </V.5.3.>

    // <V.5.4.>
    // <V.5.6./> // all weight: number -> size: Size + kg - > ${size.unit}
    validate(size: Size
    ): void {
        if (size.value > this.MAX_WEIGHT) {
            throw new Error(`Weight ${size.value}${size.unit} exceeds maximum limit of ${this.MAX_WEIGHT}kg for ${this.name()}.`);
        }
    }
    // </V.5.6./>
    // </V.5.4.>
}