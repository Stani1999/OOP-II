// Lab V.1.2.
import { Size } from "../Size";         // <V.5.6./>
import { Money } from "../Money";

export interface ShippingMethod {
    calculate(size: Size                // <V.5.6./> weight: number
        , cartTotal: Money              // <V.5.5./>
    ): Money;
    name(): string;
    estimatedDeliveryDays(): number;    // <V.5.3./>
    validate(size: Size                 // <V.5.6./> weight: number
    ): void;  // <V.5.4./>
}