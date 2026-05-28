// Lab X.5.1.
import { DomainEvent } from "./DomainEvent";
import { CartItem } from "../../oop/carts/CartItem";
import { Money } from "../Money";

export class OrderCreatedEvent 
    implements DomainEvent {
    
    readonly name = "OrderCreated";
    readonly occurredAt = new Date();

    constructor(
        public readonly orderId: string,
        public readonly items: CartItem[],
        public readonly total: Money
    ) {}
}