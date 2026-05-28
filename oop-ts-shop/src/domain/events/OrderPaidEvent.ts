// Lab X.1.2.
import { DomainEvent } from "./DomainEvent";
import { Money } from "../Money";

export class OrderPaidEvent 
    implements DomainEvent {

    readonly name = "OrderPaid";

    readonly occurredAt = new Date();

    constructor(
        public readonly orderId: string,
        public readonly total: Money
    ) {}
}