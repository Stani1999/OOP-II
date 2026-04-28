// Lab V.5.1.
import { Size } from "../Size";                             // <V.5.6./>
import { Money } from "../Money";
import { ShippingMethod } from "./ShippingMethod";

export class DroneShipping implements ShippingMethod {  // source code + export
    private readonly MAX_WEIGHT = 5; // <V.5.4./>
    private readonly FreeDeliveryThreshold = 50000;        // <V.5.5./>
    calculate(size: Size                                    // <V.5.6./> weight : number
        , cartTotal: Money                               // <V.5.5./>
        ): Money {
        
        // <V.5.5.>
        if (cartTotal.amount >= this.FreeDeliveryThreshold) {
                return new Money(0);
        }
        return new Money(2000);
    }
    name(): string {
        return "Drone";
    }

    // <V.5.3.>
    estimatedDeliveryDays(): number {
        return 1;
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