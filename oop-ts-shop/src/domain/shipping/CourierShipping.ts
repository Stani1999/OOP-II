// Lab V.1.3.
import { Size } from "../Size";                             // <V.5.6./>
import { Money } from "../Money";
import { ShippingMethod } from "./ShippingMethod";

export class CourierShipping implements ShippingMethod {
    private readonly MAX_WEIGHT = 50;           // <V.5.4./>
    private readonly FreeDeliveryThreshold = 6000;        // <V.5.5./>
    calculate(size: Size                                    // <V.5.6./> weight : number
        , cartTotal: Money                               // <V.5.5./>
        ): Money {
        
        // <V.5.5.>
        if (cartTotal.amount >= this.FreeDeliveryThreshold) {
                return new Money(0);
        }
        return new Money(1500 + size.value                  // <V.5.6./> weight
             * 200);
    }

    name(): string {
        return "Courier";
    }
    
    // <V.5.3./>
    estimatedDeliveryDays(): number {
        return 3;
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