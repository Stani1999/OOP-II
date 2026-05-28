// Lab X.5.2.
import { DomainEvent } from "./DomainEvent";

export class PaymentFailedEvent 
    implements DomainEvent {
    
        readonly name = "PaymentFailed";
    readonly occurredAt = new Date();

    constructor(
        public readonly orderId: string,
        public readonly reason: string
    ) {}
}